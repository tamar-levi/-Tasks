import { Provider } from 'react-redux';
import './App.css';
import LogUp from './components/logUp';
import store from './redux/store'
import LogIn from './components/logIn';

function App() {
 
  return (
    <Provider store={store}>
      {/* <LogUp></LogUp> */}
      <LogIn></LogIn>
      </Provider>
 
  );
}

export default App;
