import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import reducers from "../src/store/reducers";
import rootSaga from "../src/store/rootSaga";
import configureStore from "../src/store/configureStore";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Form from './client/components/Form/container';
import App from './client/components/App';
import * as serviceWorker from './serviceWorker';
import form1 from './mocks/form1.json';

const initState = {
  formData: form1
}

const store = configureStore(reducers, rootSaga, initState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/:formId" component={Form} />
      <Route path="/forms/:formId" component={Form} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
