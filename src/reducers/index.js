import { combineReducers } from 'redux';
import newsReducer from './reducer_news';

const newsApp = combineReducers({
    news: newsReducer,
  });
  
  export default newsApp;