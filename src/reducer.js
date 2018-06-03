import {combineReducers} from 'redux';

const usersState = ['@john_123', '@alex_1989', '@chris'];
const messagesState = [
  {
    text: 'Hello World!',
    datetime: 1528039551400,
    author: '@alex_1989'
  },
  {
    text: 'Hi, Alex!',
    datetime: 1528039651400,
    author: '@chris'
  }
];

const usersReducer = (state = usersState, action) => {
  if (action.type === 'ADD_NEW_USER') {
    console.log(action);

    return state.concat(action.username);
  }
  return state;
};


const messagesReducer = (state = messagesState, action) => {
  if(action.type === 'ADD_NEW_MESSAGE'){
    return state.concat({
      text: action.text,
      datetime: action.datetime,
      author: action.author
    });
  }
  return state;
};

export default combineReducers(
  {
    messagesReducer,
    usersReducer
  }
);