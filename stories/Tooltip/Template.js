import React, {PropTypes, Component} from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Tooltip from 'wix-style-react/Tooltip';
import Button from 'wix-style-react/Button';

export class Template extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    theme: Tooltip.propTypes.theme,
    placement: Tooltip.propTypes.placement,
    text: Tooltip.propTypes.content,
    showTrigger: Tooltip.propTypes.showTrigger,
    hideTrigger: Tooltip.propTypes.hideTrigger,
    type: PropTypes.oneOf(['tooltip', 'popover'])
  };

  componentDidUpdate(props) {
    props.onChange(reactElementToJSXString(this.getComponent()));
  }

  componentDidMount() {
    this.props.onChange(reactElementToJSXString(this.getComponent()));
  }

  getComponent() {
    return (
      <Tooltip
        active
        placement={this.props.placement}
        alignment="center"
        content={this.props.text}
        showTrigger={this.props.showTrigger}
        hideTrigger={this.props.hideTrigger}
        theme={this.props.theme}
        >
        {this.tooltipTarget[this.props.type]}
      </Tooltip>
    );
  }

  tooltipTarget = {
    tooltip: <div>Dark Theme</div>,
    popover: <Button type="button">Click Me</Button>
  };

  render() {
    return this.getComponent();
  }
}

export default Template;

