import React, {PropTypes} from 'react';
import classNames from 'classnames';

import Tooltip from '../Tooltip';
import SvgExclamation from '../svg/Exclamation.js';
import {Error} from '../Icons/dist';
import styles from './Input.scss';

class InputErrorSuffix extends React.Component {
  render() {
    return (
      <Tooltip
        dataHook="input-tooltip"
        disabled={this.props.errorMessage.length === 0}
        placement="top"
        moveBy={{x: 2, y: 0}}
        alignment="center"
        content={this.props.errorMessage}
        overlay=""
        theme="dark"
        >
        <div className={styles.exclamation}><SvgExclamation width={2} height={11}/></div>
      </Tooltip>
    );
  }
}

InputErrorSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  errorMessage: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};

const AmaterialErrorSuffix = ({focused, error, errorMessage}) => focused ?
  null : <Tooltip
    dataHook="input-tooltip"
    disabled={!error && !errorMessage}
    placement="right"
    showTrigger="custom"
    hideTrigger="custom"
    hideDelay={5}
    showDelay={5}
    active={!focused}
    moveBy={{x: 2, y: -10}}
    alignment="center"
    content={errorMessage}
    overlay=""
    >
    <div className={classNames(styles.errorIcon, styles.suffix)}><Error size="1.5em"/></div>
  </Tooltip>;

AmaterialErrorSuffix.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  error: PropTypes.bool,
  focused: PropTypes.bool,
};

function theme(WrappedComponent) {

  class ThemedComponent extends WrappedComponent {
    static displayName = WrappedComponent.displayName

    render() {
      return this.props.theme === 'amaterial' ?
        <AmaterialErrorSuffix focused={this.props.focused} error={this.props.error} errorMessage={this.props.errorMessage}/> :
        super.render();
    }
  }
  return ThemedComponent;
}

export default theme(InputErrorSuffix);
