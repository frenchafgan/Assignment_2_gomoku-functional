import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
