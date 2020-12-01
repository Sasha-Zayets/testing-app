import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import dataReducer from './dataReducer';

const store = createStore(dataReducer, applyMiddleware(logger, reduxThunk));

export default store;