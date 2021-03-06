import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Popup from 'terra-popup/lib/Popup';
import ExamplePopupContent from 'terra-popup/lib/terra-dev-site/doc/common/ExamplePopupContent';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handlePopupButtonClick = this.handlePopupButtonClick.bind(this);
    this.handlePopupRequestClose = this.handlePopupRequestClose.bind(this);
    this.handlePopupOnChange = this.handlePopupOnChange.bind(this);
    this.state = { open: false };
  }

  handlePopupButtonClick() {
    this.setState({ open: true });
  }

  handlePopupRequestClose() {
    this.setState({ open: false });
  }

  handlePopupOnChange() {
    this.setState({ open: false });
  }

  render() {
    const { app } = this.props;

    return (
      <div className="content-container" style={{ height: '100%', padding: '10px' }}>
        {app && app.releaseFocus ? <h4>Modal focus is released!</h4> : null }
        {app && app.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
        <br />
        <Popup
          isArrowDisplayed
          isOpen={this.state.open}
          onRequestClose={this.handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
          releaseFocus={app.releaseFocus}
          requestFocus={app.requestFocus}
        >
          <ExamplePopupContent onChange={this.handlePopupOnChange} />
        </Popup>
        <Button id="popup-in-modal" text="Popup In Modal" onClick={this.handlePopupButtonClick} />
        <br />
        <br />
        <Button className="close-disclosure" text="Close Disclosure" onClick={app.closeDisclosure} />
      </div>
    );
  }
}

ModalContainer.propTypes = {
  app: AppDelegate.propType,
};

export default ModalContainer;
