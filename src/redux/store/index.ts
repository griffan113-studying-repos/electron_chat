import { applyMiddleware, createStore } from "redux";
import reduxFunc from 'redux-thunk';

export const configureStore = () => {

  const middlewares = [
    reduxFunc
  ]

  const store = createStore(() => { }, applyMiddleware(...middlewares));

  return store
}