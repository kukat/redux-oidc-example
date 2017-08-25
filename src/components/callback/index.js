import React from 'react';
import { connect } from 'react-redux';
import { CallbackComponent } from 'redux-oidc';
import { push } from 'react-router-redux';
import userManager from '../../utils/userManager';

class CallbackPage extends React.Component {
  successCallback = (user) => {
    console.log('user: ')
    console.log(user)
    this.props.dispatch(push('/'));
  }
  errorCallback = (error) => {
    console.error(error)
  }

  render() {
    // just redirect to '/' in both cases
    return (
      <CallbackComponent userManager={userManager} successCallback={this.successCallback} errorCallback={this.errorCallback}>
        <div>
          Redirecting...
        </div>
      </CallbackComponent>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(CallbackPage);
