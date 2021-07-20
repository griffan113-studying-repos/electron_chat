import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { useEffect } from "react";

import { Home } from "./views/Home";
import { Navbar } from "./components/Navbar";
import { Settings } from "./views/Settings";
import { Welcome } from "./views/Welcome";
import { Chat } from "./views/Chat";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "./redux/store";
import { onAuthChange } from './redux/actions/auth';

const store = configureStore();

export function App () {
  useEffect(() => {
    store.dispatch(onAuthChange());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Switch>
            <Route exact path="/" >
              <Welcome />
            </Route>
            <Route path="/settings" >
              <Settings />
            </Route>
            <Route path="/chat/:id" >
              <Chat />
            </Route>
            <Route path="/home" >
              <Home />
            </Route>
          </Switch>
        </div >
      </Router>
    </Provider>
  );
}
