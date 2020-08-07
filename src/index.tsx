import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'component/App';
import { Provider } from 'mobx-react';
import stores from 'store';
import { BrowserRouter } from 'react-router-dom';

const Root = () => (
  <Provider store={stores}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root/>, document.getElementById('root'));