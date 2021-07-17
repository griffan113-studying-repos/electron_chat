import { Home } from "./views/Home";
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Navbar } from "./components/Navbar";
import { Settings } from "./views/Settings";
import { Welcome } from "./views/Welcome";
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
