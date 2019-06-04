import React, {Component} from 'react';
import './App.css';
import {MaskTextComponent} from './mask/mask-test-component';
import {ForceTestComponent} from './force/force-test-component';
import {ControlTestComponent} from './controle/control-test-component';
import {GTagTestComponent} from './g-tag/g-tag-test-component';
import {P5TestComponent} from './p5/p5-test-component';
import {TsConvertTestComponent} from './ts-convert/ts-convert-test-component';

class App extends Component {
  render() {
    console.log('hoge');
    return (
      <>
        <MaskTextComponent/>
        {/*<ForceTestComponent/>*/}
        {/*<ControlTestComponent/>*/}
        {/*<GTagTestComponent/>*/}
        {/*<P5TestComponent/>*/}
        {/*<TsConvertTestComponent/>*/}
      </>
    );
  }

}

export default App;
