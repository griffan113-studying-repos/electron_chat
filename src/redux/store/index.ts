import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxFunc from 'redux-thunk';

import { chatReducer } from "../reducers/chats";

const reducers = combineReducers({
  chats: chatReducer,
})

export const configureStore = () => {

  const middlewares = [
    reduxFunc
  ]

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  );

  return store
}

const store = configureStore();

export type State = ReturnType<typeof store.getState>;