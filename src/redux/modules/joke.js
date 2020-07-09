import axios from 'axios';

export const SET_JOKES = 'joke/set-jokes';

const initialState = {
  jokes: 'HELLO CHUCKKKK'
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case SET_JOKES:
      return {
        jokes: action.payload
      }
    default:
      return state;
  }
}

export function getJokes(category){
  return async function(dispatch){
    const result = await axios({
      method: 'GET',
      url: `https://api.chucknorris.io/jokes/random?category=${category}`
    });

    const jokes = result.data.value;

    dispatch(setJokes(jokes));
  }
}

export function setJokes(joke){
  return {
    type: SET_JOKES,
    payload: joke
  };
}
