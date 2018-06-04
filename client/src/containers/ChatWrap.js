import React, {Component} from 'react';
import MessagesList from 'MessagesList';
import PeopleList from 'PeopleList';


class ChatWrap extends Component {
    static propTypes = {

    };
    render(){
        return(
            <div>
              <PeopleList/>
              <MessagesList/>
            </div>
        )
    }
}

export default ChatWrap;