import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'component/App';
import { Provider } from 'mobx-react';
import stores from 'store';

const RenderComponent = () => (
  <Provider store={stores}>
    <App/>
  </Provider>
);

ReactDOM.render(<RenderComponent/>, document.getElementById('root'));