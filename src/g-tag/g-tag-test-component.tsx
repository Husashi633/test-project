import * as React from 'react';

interface GTagTestComponentProps {
}

interface GTagTestComponentState {
}

export class GTagTestComponent extends React.Component<GTagTestComponentProps, GTagTestComponentState> {
  private isClick: boolean = false;

  constructor(props: GTagTestComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>

        <div>
          <svg
            id={'svg'}
            xmlns="http://www.w3.org/2000/svg" x={0} y={0} width={2000} height={2000}
            viewBox="0 0 2000 2000">
            <g id={'group'} x={300} y={300} width={300} height={300}>
              <rect x={-50} y={-50} width={150} height={150} fill={'black'}/>
              <rect x={50} y={100} width={150} height={50} fill={'red'}/>
              <rect x={100} y={50} width={50} height={50} fill={'blue'}/>
              <image id={'image'} x={0} y={0} width={300} height={300} xlinkHref={'./test.jpg'}/>
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
    const group = document.getElementById('group');
    if (group) {
      group.addEventListener('mousedown', () => {
        this.isClick = true;
      });
      group.addEventListener('mouseup', () => {
        this.isClick = false;
      });
      const svg = document.getElementById('svg');
      if (svg) {
        svg.addEventListener('mouseleave', () => {
          this.isClick = false;
        });
        svg.addEventListener('mousemove', (e) => {
          if (this.isClick) {
            group.setAttribute('transform', `translate(${e.pageX} ${e.pageY})`);
            // group.setAttribute('transform', `matrix(1 1 0 1 ${e.pageX} ${e.pageY})`);
          }
        });
      }
    }
    const img = document.getElementById('image');
    const canvas = document.createElement('canvas');
    if (img) {
      img.setAttribute('style',
        'style={{transform: perspective(1px) scaleZ(-1) translateZ(-1px) matrix3d(2.37389, 1.22835e-7, 0.00268338, 0, -0.0493235, 0.308488, -0.00152046, 0, 0, 0.0000457764, 1, 0, 0, 0, 0, 1) translateZ(1px)}}');
    }
    //   const stage = document.getElementById('stage');
    //   const circle0 = document.getElementById('circle0');
    //   const circle1 = document.getElementById('circle1');
    //   const circle2 = document.getElementById('circle2');
    //   const circle3 = document.getElementById('circle3');
    //   if (stage && circle0 && circle1 && circle2 && circle3) {
    //     circle0.addEventListener('mousedown', () => this.handlerMousedownCircle(0));
    //     circle0.addEventListener('mouseup', () => this.handlerMouseupCircle());
    //     circle1.addEventListener('mousedown', () => this.handlerMousedownCircle(1));
    //     circle1.addEventListener('mouseup', () => this.handlerMouseupCircle());
    //     circle2.addEventListener('mousedown', () => this.handlerMousedownCircle(2));
    //     circle2.addEventListener('mouseup', () => this.handlerMouseupCircle());
    //     circle3.addEventListener('mousedown', () => this.handlerMousedownCircle(3));
    //     circle3.addEventListener('mouseup', () => this.handlerMouseupCircle());
    //     stage.addEventListener('mouseleave', () => this.handlerMouseupCircle());
    //     stage.addEventListener('mousemove', (e) => {
    //       if (this.isClick) {
    //         const circle = document.getElementById('circle' + this.pressCircleNum);
    //         if (circle) {
    //           circle.setAttribute('cx', '' + e.pageX);
    //           circle.setAttribute('cy', '' + e.pageY);
    //         }
    //         const rect = document.getElementById('rect');
    //         if (rect) {
    //           this.rectPos[this.pressCircleNum].x = e.pageX;
    //           this.rectPos[this.pressCircleNum].y = e.pageY;
    //           const x0 = this.rectPos[0].x;
    //           const y0 = this.rectPos[0].y;
    //           const x1 = this.rectPos[1].x;
    //           const y1 = this.rectPos[1].y;
    //           const x2 = this.rectPos[2].x;
    //           const y2 = this.rectPos[2].y;
    //           const x3 = this.rectPos[3].x;
    //           const y3 = this.rectPos[3].y;
    //           rect.setAttribute('points', `${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3}`);
    //           rect.setAttribute('style', `fill: none; stroke: black;`);
    //           // console.log(Math.sqrt(((x1 - x0) ** 2) + ((y1 - y0) ** 2)));
    //         }
    //       }
    //     });
    //   }
    // }
    //
    // private handlerMousedownCircle(num: number): void {
    //   this.isClick = true;
    //   this.pressCircleNum = num;
    // }
    //
    // private handlerMouseupCircle(): void {
    //   const rect = document.getElementById('rect');
    //   if (rect) {
    //     rect.setAttribute('style', `fill: black; stroke: black;`);
    //     this.isClick = false;
    //   }
  }
}
