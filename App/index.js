import React from 'react';

import 'react-native-gesture-handler';
import Navigator from './navigators/Navigator';

import { UserContextProvider } from './Context/User'

const App = () => {
  return (
    <UserContextProvider>
      <Navigator />
    </UserContextProvider>
  );
};

export default App;
