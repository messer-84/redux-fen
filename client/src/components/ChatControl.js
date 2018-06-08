import React, {Component} from 'react';
import {connect} from 'react-redux';

import {receiveNewMessage} from "../actions/index";

class ChatControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: props.peoples[0].id,
            userName: props.peoples[0].userName,
            text: '',
            time: Date.now(),
            color: ''

        };

    }

    handleTextChange = (e) => {
        console.log('name', e.target.name);
        this.setState({
            [e.target.name]: e.target.value

        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = {
            text: this.state.text,
            author: this.state.userName,
            time: this.state.time,
            color: this.state.color
        };
        this.props.addNewMessage(newMessage);
        this.state.text = '';
    };

    render() {
        console.log(this.props);
        return (
            <div className="chat-message clearfix">
                <form onSubmit={this.handleSubmit}> <textarea
                    placeholder="Type your message"
                    rows="4"
                    name="text"
                    onChange={this.handleTextChange}
                    value={this.state.text}
                >

                          </textarea>

                    <button>Send</button>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messagesReducer,
        peoples: state.peopleReducer
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        addNewMessage: (msg) => {
            dispatch(receiveNewMessage(msg))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatControl);