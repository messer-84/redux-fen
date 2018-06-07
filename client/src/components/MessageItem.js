import React, {Component} from 'react';

class MessageItem extends Component {

  render() {
    const {author, text, color} = this.props;
    return (
      <li className="clearfix">
        <div className="message-data align-right">
                                  <span
                                    className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
          <span className="message-data-name">{author}</span>
          <i className="fa fa-circle me"/>

        </div>
        <div className="message other-message float-right" style={{"background": color}}>{text}</div>
      </li>

    )
  }
}

export default MessageItem;