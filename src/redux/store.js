import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import categoryReducer from './modules/category';
import jokeReducer from './modules/joke';

const reducers = combineReducers({
  category: categoryReducer,
  nameAtStore: jokeReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store
