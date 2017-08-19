import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { setStack } from './actions';
import Root from './components/Root';
import App from './components/App';
import Stack from './components/Stack';
import StackForm from './components/StackForm';
import './index.css';

const store = createStore(rootReducer);
// store.subscribe(() => {
//   console.log('store', store.getState());
// })
store.dispatch(setStack({ id: 0, title: '', cards: [] }))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Root>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/stack" component={Stack}/>
          <Route path="/stack_form" component={StackForm}/>
        </Switch>
      </Root>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
