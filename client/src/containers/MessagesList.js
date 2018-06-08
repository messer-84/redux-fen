import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatHeader from 'components/ChatHeader';
import MessageItem from 'components/MessageItem';
import ChatControl from 'components/ChatControl';


class MessagesList extends Component {

    constructor() {
        super();

        this.ul = null;
        this.chatWrap = null;
    }

    componentDidUpdate() {
        this.chatWrap.scrollTop = this.ul.scrollHeight;
    }

    render() {
        console.log('mess-list -this.props.message', this.props.messages);
        return (
            <div className="chat">
                <ChatHeader/>
                <div className="chat-history" ref={chatWrap => this.chatWrap = chatWrap}>
                    <ul ref={ul => this.ul = ul}>
                        {this.props.messages.map(message => {
                            return (
                                <MessageItem key={message.time} {...message}/>
                            )
                        })}
                    </ul>
                </div>
                {this.props.peoples.length >=1 && <ChatControl/>}

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
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);