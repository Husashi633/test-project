import * as React from 'react';

interface TsConvertTestComponentProps {
}

interface TsConvertTestComponentState {
  points: number[][];
}

export class TsConvertTestComponent extends React.Component<TsConvertTestComponentProps, TsConvertTestComponentState> {
  constructor(props: TsConvertTestComponentProps) {
    super(props);
    this.state = {
      points: [[50, 50], [550, 100], [300, 400], [100, 400]],
    };
  }

  render() {
    return (
      <div>
        <canvas id={'canvas'} width={1000} height={1000}></canvas>
      </div>
    );
  }

  componentDidMount(): void {
    // 描画対象のCanvas
    const canvas: HTMLCanvasElement | null = document.getElementById('canvas') as HTMLCanvasElement;
    if(canvas){
      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if(context){
        // 変形画像を張り付けるCanvas
        const imgCanvas: HTMLCanvasElement = document.createElement('canvas');
        imgCanvas.width = canvas.width;
        imgCanvas.height = canvas.height;
        const imgContext: CanvasRenderingContext2D | null = imgCanvas.getContext('2d');
        // 枠線を張り付けるCanvas
        const borderCanvas: HTMLCanvasElement = document.createElement('canvas');
        borderCanvas.width = canvas.width;
        borderCanvas.height = canvas.height;
        const borderContext: CanvasRenderingContext2D | null = borderCanvas.getContext('2d');
        // 変形画像読み込み
        const img: HTMLImageElement = new Image();
        img.src = 'test.jpg';
        img.onload = () => {
          // キャンバスごと変形
          const transformCanvas: HTMLCanvasElement = document.createElement('canvas');
          transformCanvas.width = 300;
          transformCanvas.height = 300;
          const transformContext: CanvasRenderingContext2D | null = transformCanvas.getContext('2d');
          if(transformContext){
            transformContext.drawImage(img, 0, 0, 500, 500);
            if(borderContext){
              if(imgContext) {
                const op = new Perspective(imgContext, transformCanvas);
                op.draw(this.state.points);
                this.prepare_lines(borderContext, this.state.points);
                this.draw_canvas(context, imgContext, borderContext);
                let drag: any = null;
                canvas.addEventListener("mousedown", (event) => {
                  event.preventDefault();
                  const p = this.get_mouse_position(event);
                  for (let i: number = 0; i < 4; i++) {
                    const x = this.state.points[i][0];
                    const y = this.state.points[i][1];
                    if (p.x < x + 10 && p.x > x - 10 && p.y < y + 10 && p.y > y - 10) {
                      drag = i;
                      break;
                    }
                  }
                }, false);
                canvas.addEventListener("mousemove", (event) =>  {
                  event.preventDefault();
                  if (drag == null) {
                    return;
                  }
                  const p = this.get_mouse_position(event);
                  this.state.points[drag][0] = p.x;
                  this.state.points[drag][1] = p.y;
                  this.prepare_lines(imgContext, this.state.points, true);
                  this.draw_canvas(context, borderContext, imgContext);
                }, false);
                canvas.addEventListener("mouseup", (event) => {
                  event.preventDefault();
                  if (drag == null) {
                    return;
                  }
                  const p = this.get_mouse_position(event);
                  this.state.points[drag][0] = p.x;
                  this.state.points[drag][1] = p.y;
                  context.clearRect(0, 0, canvas.width, canvas.height);
                  borderContext.clearRect(0, 0, canvas.width, canvas.height);
                  const s = (new Date()).getTime();
                  op.draw(this.state.points);
                  // document.getElementById("ms").innerHTML = ( (new Date()).getTime() - s );
                  // prepare_lines(ctx2, points);
                  this.draw_canvas(context, borderContext, imgContext);
                  drag = null;
                }, false);
                canvas.addEventListener("mouseout", function (event) {
                  event.preventDefault();
                  drag = null;
                }, false);
                canvas.addEventListener("mouseenter", function (event) {
                  event.preventDefault();
                  drag = null;
                }, false);
              }
            }
          }
        }
      }
    }
  }

  private prepare_lines(ctx: CanvasRenderingContext2D, p: number[][], with_line: boolean = false) {
    ctx.save();
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.clearRect(0, 0, 1000, 1000);
    //
    if( with_line == true ) {
      ctx.beginPath();
      ctx.moveTo(p[0][0], p[0][1]);
      for( let i: number = 1; i < 4; i++ ) {
        ctx.lineTo(p[i][0], p[i][1]);
      }
      ctx.closePath();
      ctx.strokeStyle = "red";
      ctx.stroke();
    }
    //
    ctx.fillStyle = "blue";
    for( let i: number = 0; i<4; i++ ) {
      ctx.beginPath();
      ctx.arc(p[i][0], p[i][1], 4, 0, Math.PI*2, true);
      ctx.fill();
    }
    ctx.restore();
  }

  private draw_canvas(ctx: CanvasRenderingContext2D, ctx1: CanvasRenderingContext2D, ctx2: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(ctx1.canvas, 0, 0);
    ctx.drawImage(ctx2.canvas, 0, 0);
  }

  private get_mouse_position(event: any) {
    const rect = event.target.getBoundingClientRect() ;
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

}

class Perspective extends Object {
  public obj: {
    context: CanvasRenderingContext2D | null,
    canvasObj: HTMLCanvasElement | null,
    contextObj: CanvasRenderingContext2D | null,
    contextTemp: CanvasRenderingContext2D | null,
  } = {
    context: null,
    canvasObj: null,
    contextObj: null,
    contextTemp: null,
  };
  constructor(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ){
    super();
    const canvasObj: HTMLCanvasElement = document.createElement('canvas');
    canvasObj.width = canvas.width;
    canvasObj.height = canvas.height;
    const contextObj: CanvasRenderingContext2D | null = canvasObj.getContext('2d');
    if(contextObj){
      console.log(canvas);
      contextObj.drawImage(canvas, 0, 0, canvasObj.width, canvasObj.height);
      const canvasTemp: HTMLCanvasElement = document.createElement('canvas');
      canvasTemp.width = context.canvas.width;
      canvasTemp.height = context.canvas.height;
      const contextTemp = canvasTemp.getContext('2d');
      if(contextTemp){
        this.obj = {
          context: context,
          canvasObj: canvasObj,
          contextObj: contextObj,
          contextTemp: contextTemp
        };
      }
    }
  }
  public draw(points: number[][]): void {
    if(!this.obj.context || !this.obj.canvasObj || !this.obj.contextObj || !this.obj.contextTemp){
      return;
    }
    const dimension0x = points[0][0];
    const dimension0y = points[0][1];
    const dimension1x = points[1][0];
    const dimension1y = points[1][1];
    const dimension2x = points[2][0];
    const dimension2y = points[2][1];
    const dimension3x = points[3][0];
    const dimension3y = points[3][1];
    const distance = [
      Math.sqrt(Math.pow(dimension0x - dimension1x, 2) + Math.pow(dimension0y - dimension1y, 2)),
      Math.sqrt(Math.pow(dimension1x - dimension2x, 2) + Math.pow(dimension1y - dimension2y, 2)),
      Math.sqrt(Math.pow(dimension2x - dimension3x, 2) + Math.pow(dimension2y - dimension3y, 2)),
      Math.sqrt(Math.pow(dimension3x - dimension0x, 2) + Math.pow(dimension3y - dimension0y, 2)),
    ];
    const objWidth = this.obj.canvasObj.width;
    const objHeight = this.obj.canvasObj.height;
    let base_index: number = 0;
    let max_scale_rate: number = 0;
    let zero_num: number = 0;
    for(let i: number = 0; i < 4; i++){
      const rate: number = distance[i] / (i % 2 === 0 ? objHeight : objWidth);
      if(rate > max_scale_rate){
        base_index = i;
        max_scale_rate = rate;
      }
      if(distance[i] === 0){
        zero_num++;
      }
    }
    if(zero_num > 1){
      return;
    }
    let step: number = 2;
    let cover_step = step * 5;
    const {contextObj, contextTemp} = this.obj;
    contextTemp.clearRect(0, 0, contextTemp.canvas.width, contextTemp.canvas.height);
    if(base_index % 2 === 0) {
      const contextLen = this.create_canvas_context(objWidth, cover_step);
      if(contextLen){
        const canvasLen = contextLen.canvas;
        for(let y: number = 0; y < objHeight; y += step){
          const r = y / objHeight;
          const sx = dimension0x + (dimension3x - dimension0x) * r;
          const sy = dimension0y + (dimension3y - dimension0y) * r;
          const ex = dimension1x + (dimension2x - dimension1x) * r;
          const ey = dimension1y + (dimension2y - dimension1y) * r;
          const ag = Math.atan((ey - sy) / (ex - sx));
          const sc = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2)) / objWidth;
          contextLen.setTransform(1, 0, 0, 1, 0, -y);
          contextLen.drawImage(contextObj.canvas, 0, 0);
          contextTemp.translate(sx, sy);
          contextTemp.rotate(ag);
          contextTemp.scale(sc, sc);
          contextTemp.drawImage(canvasLen, 0, 0);
          contextTemp.setTransform(1, 0, 0, 1, 0, 0);
        }
      }
    }else{
      const contextLen = this.create_canvas_context(cover_step, objHeight);
      if(contextLen){
        const canvasLen = contextLen.canvas;
        for (let x = 0; x < objWidth; x += step) {
          const r = x / objWidth;
          const sx = dimension0x + (dimension1x - dimension0x) * r;
          const sy = dimension0y + (dimension1y - dimension0y) * r;
          const ex = dimension3x + (dimension2x - dimension3x) * r;
          const ey = dimension3y + (dimension2y - dimension3y) * r;
          const ag = Math.atan((sx - ex) / (ey - sy));
          const sc = Math.sqrt(Math.pow(ex - sx, 2) + Math.pow(ey - sy, 2)) / objHeight;
          contextLen.setTransform(1, 0, 0, 1, -x, 0);
          contextLen.drawImage(contextObj.canvas, 0, 0);
          contextTemp.translate(sx, sy);
          contextTemp.rotate(ag);
          contextTemp.scale(sc, sc);
          contextTemp.drawImage(canvasLen, 0, 0);
          contextTemp.setTransform(1, 0, 0, 1, 0, 0);
        }
      }
    }
    this.obj.context.save();
    this.set_clipping_path(this.obj.context, [
      [dimension0x, dimension0y],
      [dimension1x, dimension1y],
      [dimension2x, dimension2y],
      [dimension3x, dimension3y]
    ]);
    this.obj.context.drawImage(contextTemp.canvas, 0, 0);
    this.obj.context.restore();
  }

  private create_canvas_context(width: number, height: number): CanvasRenderingContext2D | null {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas.getContext('2d');
  }

  private set_clipping_path(context: CanvasRenderingContext2D, points: number[][]) {
    context.beginPath();
    context.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
      context.lineTo(points[i][0], points[i][1]);
    }
    context.closePath();
    context.clip();
  }
}