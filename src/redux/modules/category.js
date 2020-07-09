import axios from 'axios';

export const SET_CATEGORIES = 'joke/categories/set-categories';

const initialState = {
  categories: []
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case SET_CATEGORIES:
      return {
        categories: action.payload
      }
    default:
      return state;
  }
}


export function getCategories(){
  return async function(dispatch){
    const result = await axios({
      method: 'GET',
      url: 'https://api.chucknorris.io/jokes/categories'
    });

    const categories = result.data;

    dispatch(setCategories(categories));
  }
}

export function setCategories(categories){
  return {
    type: SET_CATEGORIES,
    payload: categories
  };
}
