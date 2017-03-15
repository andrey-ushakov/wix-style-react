import React from 'react';
import Modal from './Modal';
import ModalFactory from './Modal.driver';
import {createDriverFactory} from '../test-common';
import sinon from 'sinon';
import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';
import {modalTestkitFactory} from '../../testkit';
import {modalTestkitFactory as enzymeMessageBoxTestkitFactory} from '../../testkit/enzyme';

/**
 * Modal.propTypes = {
  - isOpen: React.PropTypes.bool.isRequired,
  - contentLabel: React.PropTypes.string.isRequired,
  onCancel: React.PropTypes.func,
  style: React.PropTypes.oneOf(Object.keys(colors)),
  theme: React.PropTypes.oneOf(Object.keys(colors)),
  - children: React.PropTypes.any,
  zIndex: React.PropTypes.number,
  - shouldCloseOnOverlayClick: React.PropTypes.bool,
  onRequestClose: React.PropTypes.func,
  - onAfterOpen: React.PropTypes.func,
  horizontalPosition: React.PropTypes.oneOf(Object.keys(positions)),
  verticalPosition: React.PropTypes.oneOf(Object.keys(positions)),
  closeTimeoutMS: React.PropTypes.number
};
 */
describe('Modal', () => {
  const createDriver = createDriverFactory(ModalFactory);

  const props = {};

  beforeEach(() => {
    props.isOpen = true;
    props.contentLabel = 'modal_' + Math.random();
  });

  describe('content', () => {

    it(`should not render the modal content if not open by default`, () => {
      props.isOpen = false;

      const driver = createDriver(<Modal {...props}>
        <div data-hook="inner-div"/>
      </Modal>);
      expect(driver.getChildBySelector('[data-hook="inner-div"]')).toBeNull();
    });

    it(`should render the passed children in the markup`, () => {
      // props.isOpen = true;
      // const driver = createDriver(<Modal {...props}>
      //   <div className="inner-div" data-hook="inner-div"/>
      // </Modal>);
      // expect(driver.getChildBySelector('[data-hook="inner-div"]')).not.toBeNull();
    });

    it(`should trigger the onAfterOpen function`, () => {
      props.onAfterOpen = sinon.spy();

      createDriver(<Modal {...props}/>);
      expect(props.onAfterOpen.calledOnce).toBeTruthy();
    });

    it(`should trigger the onRequestClose function when clicking the overlay`, () => {
      // props.onRequestClose = sinon.spy();
      // props.shouldCloseOnOverlayClick = true;
      // props.closeTimeoutMS = 0;

      // const driver = createDriver(<Modal {...props}/>);
      // driver.clickOnOverlay();

      // expect(props.onRequestClose.calledOnce).toBeTruthy();

    });
  });

  // describe('testkit', () => {
  //   it('should exist', () => {
  //     expect(isTestkitExists(<Modal/>, modalTestkitFactory)).toBe(true);
  //   });
  // });

  // describe('enzyme testkit', () => {
  //   it('should exist', () => {
  //     expect(isEnzymeTestkitExists(<Modal/>, enzymeMessageBoxTestkitFactory)).toBe(true);
  //   });
  // });


});
