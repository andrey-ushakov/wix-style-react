import React, {Component, PropTypes} from 'react';

import Template from './Template';
import RadioGroup from '../../src/RadioGroup';
import Label from '../../src/Label';
import Input from '../../src/Input';
import ToggleSwitch from '../../src/ToggleSwitch';
import * as Icons from '../../src/Icons/dist';

import styles from '../Button/ExampleButton.scss';

class ExampleTooltip extends Component {

  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    type: 'default',
    text: 'Tooltip appears on hover'
  };

  render() {
    return (
      <form className={styles.form}>
        <div className={styles.input}>

          <div className={styles.option}>
            <Label>Type</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.theme}
                onChange={type => this.setState({type})}
              >
                <RadioGroup.Radio value="default">Default</RadioGroup.Radio>
                <RadioGroup.Radio value="biggerInfo">Bigger info tooltip</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Text</Label>
            <div className={styles.flex}>
              <Input
                size="small"
                value={this.state.text}
                onChange={e => this.setState({text: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className={styles[this.state.theme === 'whiteblue' ? 'output-lightblue' : 'output']}>
          <div className={`${styles[this.state.theme]} ${styles.exampleWrapper}`}>
            <Template {...this.state} onChange={this.props.onChange}/>
          </div>
        </div>
      </form>
    );
  }
}

export default ExampleTooltip;
