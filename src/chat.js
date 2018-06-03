import React, {Component} from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import Messages from './messages';
import Users from './users';
import { connectedNewUser, addNewUser, newMessage } from './actions';


class Chat extends Component {
  render() {


    return (
      <main className="main-wrapper">
        <Messages messages = {this.props.messages} newMessage={this.props.newMessage}/>
        <Users users = {this.props.users} connectedNewUser={this.props.connectedNewUser}/>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer,
    messages: state.messagesReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: bindActionCreators(addNewUser, dispatch),
    connectedNewUser: bindActionCreators(connectedNewUser, dispatch),
    newMessage: bindActionCreators(newMessage, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
