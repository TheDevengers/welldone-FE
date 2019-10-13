import React, { Component } from 'react';
import { ModalBox } from '../components/commons/index';
import { logout } from './../persistence/access';

import * as actionTypes from '../utils/actionTypes';

export const ErrorContext = React.createContext();

class ErrorProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  onHandleCloseModal = () => {
    this.setState({ error: false });
    logout();
  }

  showError = (err, callback) => {
    if(err.message === actionTypes.HTTP_401_ERROR) {
      return this.setState({ error: true });
    }
    return callback();
  }

  render() {
    const { error } = this.state;
    return(
      <ErrorContext.Provider
        value={{
          showError: this.showError
        }}
      >
        {this.props.children}
        <ModalBox message="Your session has expired" open={error} onClose={this.onHandleCloseModal}></ModalBox>
      </ErrorContext.Provider>

    );
  }
}

export default ErrorProvider;
