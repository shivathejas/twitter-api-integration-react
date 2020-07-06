import React from 'react';
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
        <Router>
          <Switch>
            <Route exact path="/">
                <Search></Search>
            </Route>
            <Route path="/searchResultPage">
                <SearchResultPage/>
            </Route>
          </Switch>
        </Router>        
    </Provider>
  );
}

export default App;
