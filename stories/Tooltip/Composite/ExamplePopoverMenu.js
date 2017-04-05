import React, {Component} from 'react';

import Template from './Template';
import RadioGroup from '../../../src/RadioGroup';
import Label from '../../../src/Label';
import Input from '../../../src/Input';
import * as Icons from '../../../src/Icons/dist';
import PopoverMenuBuilder from './PopoverMenuBuilder/PopoverMenuBuilder';

import styles from './Example.scss';

class ExamplePopoverMenu extends Component {

  state = {
    size: 'normal',
    placement: 'top',
    text: [
        {iconName: 'PenOutline', text: 'Edit'},
        {iconName: 'VisibilityHidden', text: 'Hide'},
        {iconName: 'Trash3', text: 'Delete'}
    ]

  };

  render() {
    const text = (
      <ul>
        {this.state.text.map((menuItem, i) => (
          <li key={i}>{React.createElement(Icons[menuItem.iconName])} {menuItem.text}</li>
        ))}
      </ul>
    );

    return (
      <form className={styles.form}>
        <div className={styles.input}>

          <div className={styles.option}>
            <Label>Size</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.size}
                onChange={size => this.setState({size})}
                >
                <RadioGroup.Radio value="normal">Normal</RadioGroup.Radio>
                <RadioGroup.Radio value="large">Large</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Direction</Label>
            <div className={styles.flex}>
              <RadioGroup
                display="horizontal"
                value={this.state.placement}
                onChange={placement => this.setState({placement})}
                >
                <RadioGroup.Radio value="top">Top</RadioGroup.Radio>
                <RadioGroup.Radio value="right">Right</RadioGroup.Radio>
                <RadioGroup.Radio value="bottom">Bottom</RadioGroup.Radio>
                <RadioGroup.Radio value="left">Left</RadioGroup.Radio>
              </RadioGroup>
            </div>
          </div>

          <div className={styles.option}>
            <Label>Text</Label>
            <div className={styles.flex}>
              <PopoverMenuBuilder/>
            </div>
          </div>
        </div>

        <div className={styles.output}>
          <div className={styles.exampleWrapper}>
            <Template
              theme="light"
              placement={this.state.placement}
              text={text}
              showTrigger="click"
              hideTrigger="click"
              type="popoverMenu"
              size={this.state.size}
              onChange={this.props.onChange}
              />
          </div>
        </div>
      </form>
    );
  }
}

export default ExamplePopoverMenu;
