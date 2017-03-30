import React, {PropTypes} from 'react';

import Tooltip from '../Tooltip';
import {Help, InfoMaterial} from '../Icons/dist';
import styles from './Input.scss';

class InputHelpSuffix extends React.Component {
  render() {
    return (
      <Tooltip
        dataHook="input-tooltip"
        disabled={this.props.helpMessage.length === 0}
        maxWidth="250px"
        placement="right"
        moveBy={{x: 2, y: 0}}
        alignment="center"
        hideDelay={100}
        content={this.props.helpMessage}
        overlay=""
        >
        <div className={styles.help}><Help height="20" width="20"/></div>
      </Tooltip>
    );
  }
}

InputHelpSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  helpMessage: PropTypes.string.isRequired,
  help: PropTypes.bool,
};

const AmaterialHelpSuffix = ({help, helpMessage}) =>
  <Tooltip
    dataHook="input-tooltip"
    disabled={!help || helpMessage.length === 0}
    maxWidth="250px"
    placement="right"
    moveBy={{x: 6, y: -10}}
    alignment="center"
    hideDelay={100}
    content={helpMessage}
    overlay=""
    >
    <div className={styles.amaterialHelp}><InfoMaterial height="30" width="30"/></div>
  </Tooltip>;

AmaterialHelpSuffix.propTypes = {
  help: PropTypes.bool,
  helpMessage: PropTypes.string
};

function theme(WrappedComponent) {

  class ThemedComponent extends WrappedComponent {
    static displayName = WrappedComponent.displayName

    render() {
      return this.props.theme === 'amaterial' ?
        <AmaterialHelpSuffix help={this.props.help} helpMessage={this.props.helpMessage}/> :
        super.render();
    }
  }

  return ThemedComponent;
}

export default theme(InputHelpSuffix);
