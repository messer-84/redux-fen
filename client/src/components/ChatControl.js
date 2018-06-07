import React, {Component} from 'react';

class ChatControl extends Component {
    render(){
        return(
          <div className="chat-message clearfix">
                          <textarea placeholder="Type your message" rows="4">

                          </textarea>

            <button>Send</button>

          </div>

        )
    }
}

export default ChatControl;