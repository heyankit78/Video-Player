import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom'; // Use Routes and Route
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import Maincontainer from './components/Maincontainer';
import WatchContainer from './components/WatchContainer';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Routes> {/* Use Routes for defining routes */}
          <Route path="/" element={<Body />}>
            <Route index element={<Maincontainer />} /> {/* Default home path */}
            <Route path="/main" element={<Maincontainer />} /> {/* /main path */}
            <Route path="/watch" element={<WatchContainer />} /> {/* watch path */}
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
