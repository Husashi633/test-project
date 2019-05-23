import * as React from 'react';

interface P5TestComponentProps {
}

interface P5TestComponentState {
}

export class P5TestComponent extends React.Component<P5TestComponentProps, P5TestComponentState> {

  constructor(props: P5TestComponentProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <canvas id={'svg_test'}>
          {/*<svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} width={200} height={200} viewBox="0 0 200 200">*/}
            {/*<rect x="0" y="0" fill="red" width="200" height="200"/>*/}
          {/*</svg>*/}
        </canvas>

      </div>
    );
  }

  componentDidMount(): void {
  }

  // private setup() {
  //   createCanvas(480, 480);
  //   background('skyblue');
  // }
  //
  // function draw() {
  //   noStroke();
  //
  //   //赤い四角
  //   fill('red');
  //   rect(0, 0, 100, 100);
  //
  //   //push(); pop(); 座標の保存
  //   //赤い四角の描写座標を保存して、下の青い四角の変形をすることができる
  //   push();
  //   //移動する
  //   translate(10, 10);
  //   fill('blue');
  //   rect(0, 0, 100, 100);
  //   pop();
  //
  //   //緑の四角
  //   push();
  //   translate(20, 20);
  //   //回転させる
  //   //ラジアンで指定 PI=180度
  //   rotate(PI/4);
  //   //radians()で角度を指定できる
  //   // rotate(radians(30));
  //
  //   //scale(x, y); 大きさの指定 xが2倍, yが半分
  //   scale(2, 0.5);
  //   fill('green');
  //   rect(0, 0, 100, 100);
  //   pop();
  // }

}