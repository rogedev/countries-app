import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { MuiTheme } from './components/MuiTheme';
import { AppRoutes } from './components/AppRoutes';
import { persistor, store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiTheme>
          <AppRoutes />
        </MuiTheme>
      </PersistGate>
    </Provider>
  );
}

export default App;
