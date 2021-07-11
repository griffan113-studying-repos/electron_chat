import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxFunc from 'redux-thunk';

import { chatReducer } from "../reducers/chats";

interface IRootState {
  chats: {
    items?: {
      id?: string;
      name?: string;
      description?: string;
      image?: string;
      admin?: string;
    }
  };
}

export const configureStore = () => {

  const middlewares = [
    reduxFunc
  ]

  const store = createStore(combineReducers({
    chats: chatReducer
  }), applyMiddleware(...middlewares));

  return store
}

export type RootState = IRootState;