import { Home } from "./views/Home";
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Navbar } from "./components/Navbar";
import { Settings } from "./views/Settings";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { Chat } from "./views/Chat";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";

const store = configureStore();

export function App () {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='content-wrapper'>
          <Switch>
            <Route path="/settings" >
              <Settings />
            </Route>
            <Route path="/chat/:id" >
              <Chat />
            </Route>
            <Route path="/register" >
              <Register />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <Route exact path="/" >
              <Home />
            </Route>
          </Switch>
        </div >
      </Router>
    </Provider>
  );
}
