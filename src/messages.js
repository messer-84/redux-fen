import React, {Component} from 'react';

class Messages extends Component {
  submitForm(e) {
    e.preventDefault();
    this.props.newMessage('@alex123', this.input.value, Date.now());
    this.input.value = '';
  }

  render() {
    return (
      <div className="chat">

      <form action="#" onSubmit={this.submitForm.bind(this)}>
          {this.props.messages.map(message => {
            const date = new Date(message.datetime);

            return (<p className="message" key={message.datetime}>
            <span className="message__date">
              {`${date.getDate()}/
              ${date.getMonth()}/
              ${date.getFullYear()}
              ${date.getHours()}:
              ${date.getMinutes()}:
              `}
              </span>
              <span className="message__author">{message.author}</span>
              <span>{message.text}</span>
            </p>);
          })}
          <input
            ref={(input) => this.input = input}
            type="text"
            className="chat__input"
          />
      </form>
      </div>

    )
  }
}

export default Messages;