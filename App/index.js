import React from 'react';

import 'react-native-gesture-handler';
import Navigator from './navigators/Navigator';
import FCMContainer from './components/FCMContainer';

import { UserContextProvider } from './context/User'

const App = () => {
  return (
    <FCMContainer>
      <UserContextProvider>
        <Navigator />
      </UserContextProvider>
    </FCMContainer>
  );
};

export default App;
