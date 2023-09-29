import Routes from './Routes';
import './styles/theme.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;