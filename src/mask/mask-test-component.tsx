import * as React from 'react';

interface MaskTextComponentProps {
}

interface MaskTextComponentState {
}

export class MaskTextComponent extends React.Component<MaskTextComponentProps, MaskTextComponentState> {

  constructor(props: MaskTextComponentProps) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: "#FFFFFF"}}>
          <svg id={"svg"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
            <image id={"image"} x={0} y={0} width={300} height={300} xlinkHref={"./test.jpg"} />
          </svg>
      </div>
    );
  }

  componentDidMount(): void {
    this.makeMask();
  }

  private makeMask(): void {
    const svg = document.getElementById("svg");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const mask = document.createElementNS("http://www.w3.org/2000/svg", "mask");
    mask.setAttribute("id", "mask_circle");
    // const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // circle.setAttribute("cx", "150");
    // circle.setAttribute("cy", "150");
    // circle.setAttribute("r", "30");
    // circle.setAttribute("fill", "#FFFFFF");
    // mask.appendChild(circle);

    const path = this.attribute(
      document.createElementNS("http://www.w3.org/2000/svg", "path"),[
        {name: "d", value: "M 20 100 L 300 100"},
        {name: "fill", value: "white"},
        {name: "stroke", value: "white"},
        {name: "stroke-width", value: "25"},
        {name: "stroke-dasharray", value: "0, 280"},
      ]);
    mask.appendChild(path);

    const animate = document.createElementNS('http://www.w3.org/2000/svg', "animate");
    animate.setAttribute('attributeName', 'stroke-dasharray');
    animate.setAttribute("from", '0');
    animate.setAttribute("to", '50%');
    animate.setAttribute("begin", '100ms');
    animate.setAttribute("dur", '5000ms');
    animate.setAttribute("fill", 'freeze');
    path.appendChild(animate);

    /* set */
    // let pastDashArray = '280, 0';
    // for(let i: number = 0; i <= 100; i++) {
    //   const currentDashArray = `${Math.round(2.8 * i)}, ${Math.round(280 - 2.8 * i)}`;
    //   if(currentDashArray === pastDashArray){
    //     continue;
    //   }
    //   const animateEle: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', 'set');
    //   animateEle.setAttributeNS(null,  'attributeName', 'stroke-dasharray');
    //   animateEle.setAttributeNS(null,  'attributeType', 'css');
    //   animateEle.setAttributeNS(null,  'from', pastDashArray);
    //   animateEle.setAttributeNS(null,  'to', currentDashArray);
    //   animateEle.setAttributeNS(null,  'begin', i * 10 + 'ms');
    //   animateEle.setAttributeNS(null,  'dur', 10 + 'ms');
    //   animateEle.setAttributeNS(null,  'fill', 'freeze');
    //   path.appendChild(animateEle);
    //   console.group();
    //   console.log(currentDashArray);
    //   console.log(pastDashArray);
    //   console.groupEnd();
    //   pastDashArray = currentDashArray;
    // }

    defs.appendChild(mask);
    const image = document.getElementById("image");
    if(image){
      image.setAttribute("mask", "url(#mask_circle)");
    }
    if(svg){
      svg.appendChild(defs);
    }
    console.log('svg: ', svg);
    console.log('defs: ', defs);
    console.log('mask: ', mask);
    console.log('path: ', path);
    console.log("img: ", image);
  }

  private attribute(tagName: any, ele: AttributeElement[]): any {
    const tag = tagName;
    ele.map((data) => {
      tag.setAttribute(data.name, data.value);
    });
    return tag;
  }

}

interface AttributeElement {
  name: string;
  value: string;
}