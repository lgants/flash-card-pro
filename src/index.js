import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { setStack } from './actions';
import App from './components/App';
import Stack from './components/Stack';

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log('store', store.getState());
})
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/stack" component={Stack}/>
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
