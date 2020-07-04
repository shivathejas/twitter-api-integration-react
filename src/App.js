import React from 'react';
import './App.css';
import Search from './components/Search';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom'
import SearchResultPage from './components/SearchResultPage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Search></Search>
              </div>
            </Route>
            <Route path="/searchResultPage">
              <div>
                <SearchResultPage/>
              </div>
            </Route>
          </Switch>
        </Router>
        
      </div>
    </Provider>
  );
}

export default App;
