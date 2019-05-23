import * as React from 'react';
import circle from '../circle.svg';
import {createElement} from 'react';

interface ControlTestComponentProps {
}

interface ControlTestComponentState {
  flag: boolean;
}

export class ControlTestComponent extends React.Component<ControlTestComponentProps, ControlTestComponentState> {
  private isClick: boolean = false;
  private pressCircleNum: number = -1;
  private rectPos = [
    {x: 100, y: 100},
    {x: 300, y: 100},
    {x: 300, y: 300},
    {x: 100, y: 300},
  ];

  constructor(props: ControlTestComponentProps) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  render() {
    const x0 = this.rectPos[0].x;
    const y0 = this.rectPos[0].y;
    const x1 = this.rectPos[1].x;
    const y1 = this.rectPos[1].y;
    const x2 = this.rectPos[2].x;
    const y2 = this.rectPos[2].y;
    const x3 = this.rectPos[3].x;
    const y3 = this.rectPos[3].y;
    const spanX1 = (x1 - x0) / 10;
    const spanY1 = (y1 - y0) / 10;
    const spanX2 = (x2 - x3) / 10;
    const spanY2 = (y2 - y3) / 10;
    return (
      <div>

        <div id={'stage'}>
          <svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} width={2000} height={2000}
               viewBox="0 0 2000 2000">
            <g id={'group'}>
              {/*<rect id={'rect2'} x={100} y={100} width={200} height={200} fill={'red'}/>*/}
              <polygon id={'rect'} points={`${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                       style={{fill: 'none', stroke: 'black'}}/>
              {/*<polygon id={'rect1'}*/}
                       {/*points={`${x0},${y0} ${x0 + spanX1},${y0 + spanY1} ${x3 + spanX2},${y3 + spanY2} ${x3},${y3}`}*/}
                       {/*style={{fill: '#FF0000', stroke: '#FF0000'}}/>*/}
              {/*<polygon id={'rect2'}*/}
                       {/*points={`${x0 + spanX1},${y0 + spanY1} ${x0 + (spanX1 * 2)},${y0 + (spanY1 * 2)} ${x3 + spanX2 * 2},${y3 + (spanY2 * 2)} ${x3 + spanX2},${y3 + spanY2}`}*/}
                       {/*style={{fill: '#00FF00', stroke: '#00FF00'}}/>*/}
              {/*<polygon id={'rect3'}*/}
                       {/*points={`${x0 + (spanX1 * 2)},${y0 + (spanY1 * 2)} ${x0 + (spanX1 * 3)},${y0 + (spanY1 * 3)} ${x3 + (spanX2 * 3)},${y3 + (spanY2 * 3)} ${x3 + (spanX2 * 2)},${y3 + (spanY2 * 2)}`}*/}
                       {/*style={{fill: '#0000FF', stroke: '#0000FF'}}/>*/}
              {/*<polygon id={'rect4'}*/}
                       {/*points={`${x0 + (spanX1 * 3)},${y0 + (spanY1 * 3)} ${x0 + (spanX1 * 4)},${y0 + (spanY1 * 4)} ${x3 + (spanX2 * 4)},${y3 + (spanY2 * 4)} ${x3 + (spanX2 * 3)},${y3 + (spanY2 * 3)}`}*/}
                       {/*style={{fill: '#FF00FF', stroke: '#FF00FF'}}/>*/}
              {/*<polygon id={'rect5'}*/}
                       {/*points={`${x0 + (spanX1 * 4)},${y0 + (spanY1 * 4)} ${x0 + (spanX1 * 5)},${y0 + (spanY1 * 5)} ${x3 + (spanX2 * 5)},${y3 + (spanY2 * 5)} ${x3 + (spanX2 * 4)},${y3 + (spanY2 * 4)}`}*/}
                       {/*style={{fill: '#FFFF00', stroke: '#FFFF00'}}/>*/}
              {/*<polygon id={'rect6'}*/}
                       {/*points={`${x0 + (spanX1 * 5)},${y0 + (spanY1 * 5)} ${x0 + (spanX1 * 6)},${y0 + (spanY1 * 6)} ${x3 + (spanX2 * 6)},${y3 + (spanY2 * 6)} ${x3 + (spanX2 * 5)},${y3 + (spanY2 * 5)}`}*/}
                       {/*style={{fill: '#00FFFF', stroke: '#00FFFF'}}/>*/}
              {/*<polygon id={'rect7'}*/}
                       {/*points={`${x0 + (spanX1 * 6)},${y0 + (spanY1 * 6)} ${x0 + (spanX1 * 7)},${y0 + (spanY1 * 7)} ${x3 + (spanX2 * 7)},${y3 + (spanY2 * 7)} ${x3 + (spanX2 * 6)},${y3 + (spanY2 * 6)}`}*/}
                       {/*style={{fill: '#333333', stroke: '#666666'}}/>*/}
              {/*<polygon id={'rect8'}*/}
                       {/*points={`${x0 + (spanX1 * 7)},${y0 + (spanY1 * 7)} ${x0 + (spanX1 * 8)},${y0 + (spanY1 * 8)} ${x3 + (spanX2 * 8)},${y3 + (spanY2 * 8)} ${x3 + (spanX2 * 7)},${y3 + (spanY2 * 7)}`}*/}
                       {/*style={{fill: '#999999', stroke: '#999999'}}/>*/}
              {/*<polygon id={'rect9'}*/}
                       {/*points={`${x0 + (spanX1 * 8)},${y0 + (spanY1 * 8)} ${x0 + (spanX1 * 9)},${y0 + (spanY1 * 9)} ${x3 + (spanX2 * 9)},${y3 + (spanY2 * 9)} ${x3 + (spanX2 * 8)},${y3 + (spanY2 * 8)}`}*/}
                       {/*style={{fill: '#BBBBBB', stroke: '#BBBBBB'}}/>*/}
              {/*<polygon id={'rect10'}*/}
                       {/*points={`${x0 + (spanX1 * 9)},${y0 + (spanY1 * 9)} ${x0 + (spanX1 * 10)},${y0 + (spanY1 * 10)} ${x3 + (spanX2 * 10)},${y3 + (spanY2 * 10)} ${x3 + (spanX2 * 9)},${y3 + (spanY2 * 9)}`}*/}
                       {/*style={{fill: 'black', stroke: '#000000'}}/>*/}
            </g>
            <circle id={'circle0'} cx={100} cy={100} r={50} fill={'red'}/>
            <circle id={'circle1'} cx={300} cy={100} r={50} fill={'blue'}/>
            <circle id={'circle2'} cx={300} cy={300} r={50} fill={'green'}/>
            <circle id={'circle3'} cx={100} cy={300} r={50} fill={'yellow'}/>
          </svg>

        </div>

      </div>
    );
  }

  componentDidMount(): void {
    const stage = document.getElementById('stage');
    const circle0 = document.getElementById('circle0');
    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');
    const circle3 = document.getElementById('circle3');
    if (stage && circle0 && circle1 && circle2 && circle3) {
      circle0.addEventListener('mousedown', () => this.handlerMousedownCircle(0));
      circle0.addEventListener('mouseup', () => this.handlerMouseupCircle());
      circle1.addEventListener('mousedown', () => this.handlerMousedownCircle(1));
      circle1.addEventListener('mouseup', () => this.handlerMouseupCircle());
      circle2.addEventListener('mousedown', () => this.handlerMousedownCircle(2));
      circle2.addEventListener('mouseup', () => this.handlerMouseupCircle());
      circle3.addEventListener('mousedown', () => this.handlerMousedownCircle(3));
      circle3.addEventListener('mouseup', () => this.handlerMouseupCircle());
      stage.addEventListener('mouseleave', () => this.handlerMouseupCircle());
      stage.addEventListener('mousemove', (e) => {
        if (this.isClick) {
          const circle = document.getElementById('circle' + this.pressCircleNum);
          if (circle) {
            circle.setAttribute('cx', '' + e.pageX);
            circle.setAttribute('cy', '' + e.pageY);
          }
          const rect = document.getElementById('rect');
          if (rect) {
            this.rectPos[this.pressCircleNum].x = e.pageX;
            this.rectPos[this.pressCircleNum].y = e.pageY;
            const x0 = this.rectPos[0].x;
            const y0 = this.rectPos[0].y;
            const x1 = this.rectPos[1].x;
            const y1 = this.rectPos[1].y;
            const x2 = this.rectPos[2].x;
            const y2 = this.rectPos[2].y;
            const x3 = this.rectPos[3].x;
            const y3 = this.rectPos[3].y;
            rect.setAttribute('points', `${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3}`);
            rect.setAttribute('style', `fill: none; stroke: black;`);
            const img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
            img.setAttributeNS(null, 'xlinkHref', './test.jpg');
            rect.appendChild(img);
            // console.log(Math.sqrt(((x1 - x0) ** 2) + ((y1 - y0) ** 2)));
          }
        }
      });
    }
  }

  private handlerMousedownCircle(num: number): void {
    this.isClick = true;
    this.pressCircleNum = num;
  }

  private handlerMouseupCircle(): void {
    const rect = document.getElementById('rect');
    if (rect) {
      rect.setAttribute('style', `fill: black; stroke: black;`);
      this.isClick = false;
    }
    this.setState({
      flag: !this.state.flag,
    });
  }

}