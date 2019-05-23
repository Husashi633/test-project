import * as React from 'react';

interface ForceTestComponentProps {
}

interface ForceTestComponentState {
  force: number;
}

export class ForceTestComponent extends React.Component<ForceTestComponentProps, ForceTestComponentState> {
  private oldPosX: number = 0;
  private oldPosY: number = 0;
  private pressure: number = 0;

  constructor(props: ForceTestComponentProps) {
    super(props);
    this.state = {
      force: 0,
    };
  }

  render() {
    return (
      <div id={'container'}>
        <svg width={400} height={400} id={"canvas"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"/>
        <div style={{backgroundColor: 'gold'}}>
          force : {this.state.force}
        </div>
      </div>
    );
  }

  componentDidMount(): void {
    const canvas = document.getElementById("canvas");
    if(canvas){
      canvas.addEventListener('touchmove', (e) => this.setState({force: e.touches[0].force}));
        canvas.addEventListener('touchmove', (e) => {
          e.preventDefault();
          if(this.state.force > 0){
            const posx: number = e.touches[0].screenX;
            const posy: number = e.touches[0].screenY;
            if(this.oldPosX === 0 && this.oldPosY === 0){
              this.oldPosX = posx;
              this.oldPosY = posy;
              return;
            }
            // const posx: number = this.oldPosX + 1;
            // const posy: number = this.oldPosY + 1;
            // const canvas = document.getElementById("canvas");
            const path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            path.setAttributeNS(null, 'd', 'M ' + this.oldPosX + ' ' + this.oldPosY + ' L ' + posx + ' ' + posy);
            path.setAttributeNS(null, 'fill', '#000000');
            path.setAttributeNS(null, 'stroke', '#000000');
            path.setAttributeNS(null, 'stroke-width', '' + (25 * this.state.force));
            path.setAttributeNS(null, 'stroke-linecap', 'round');
            path.setAttributeNS(null, 'stroke-linejoin', 'round');
            if(canvas){
              canvas.appendChild(path);
            }
            this.oldPosX = posx;
            this.oldPosY = posy;
          }
        });
        canvas.addEventListener('touchend', () => {
          this.oldPosX = this.oldPosY = 0;
        })
    }
  }

  private pressureEv(): void {
    const canvas = document.getElementById("canvas");
    if(canvas){
      canvas.addEventListener("pointermove", (e) => {
        this.pressure = e.pressure;
      });
    }
    console.log(this.pressure);
  }

}