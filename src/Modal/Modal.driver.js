import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const modalDriverFactory = ({element, wrapper, component}) => {

  const getPortal = () => document.body.querySelector('.portal');
  const getOverlay = () => document.body.querySelector('.ReactModal__Overlay');
  return {
    exists: () => !!(getPortal()) && !!element,
    isThemeExist: theme => !!getPortal().querySelector(`.${theme}`),
    getTitle: () => getPortal().querySelector('[data-hook="header-layout-title"]').textContent,
    getChildBySelector: selector => getPortal().querySelector(selector),
    clickOnOverlay: () => ReactTestUtils.Simulate.click(getOverlay()),
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default modalDriverFactory;
