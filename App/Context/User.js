import React, {createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const UserContext = createContext({
    isLoading: false,
    userInfo: undefined,
    login: (email, password) => {},
    getUserInfo: () => {}
  });

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    
    const login = (email, password) => {
      AsyncStorage.setItem('token', 'save your token').then(() => {
        setUserInfo({
          name: 'dev-yakuza',
          email: 'dev.yakuza@gamil.com',
        });
        setIsLoading(true);
      });
    };

    const getUserInfo = () => {
      AsyncStorage.getItem('token')
        .then((value) => {
          if (value) {
            // Get UserInfo via UserInfo API
            setUserInfo({
              name: 'dev-yakuza',
              email: 'dev.yakuza@gamil.com',
            });
          }
          setIsLoading(true);
        })
        .catch(() => {
          setUserInfo(undefined);
          setIsLoading(true);
        });
    };

    useEffect(() => {
      getUserInfo();
    }, []);

    return (
        <UserContext.Provider
          value={{
            isLoading,
            userInfo,
            login,
            getUserInfo
          }}>
            {children}
        </UserContext.Provider>
      );
  };
export { UserContextProvider, UserContext };