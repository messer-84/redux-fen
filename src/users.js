import React, {Component} from 'react';

class Users extends Component {

    render(){

        return(
            <div className="users">
              <h3 className="users__title">Online users:</h3>
              <ul>
                { this.props.users.map(u => {
                  return <li key={u}>{u}</li>
                }) }
              </ul>
              <button onClick={ this.props.connectedNewUser }>
                add new user
              </button>
            </div>
        )
    }
}

export default Users;