import React, {createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

const UserContext = createContext({
    isLoading: false,
    userInfo: undefined,
    getUserInfo: () => {},
    googleLogin: () => {}
  });

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const googleLogin = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo)

        AsyncStorage.setItem('token', 'save your token').then(() => {
            setUserInfo({
              name: 'dev-yakuza',
              email: 'dev.yakuza@gamil.com',
            });
            setIsLoading(true);
          });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    }

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
      GoogleSignin.configure({
        webClientId: '', 
        offlineAccess: true, 
        hostedDomain: '', 
        forceConsentPrompt: true, 
      });
    }, []);

    return (
        <UserContext.Provider
          value={{
            isLoading,
            userInfo,
            getUserInfo,
            googleLogin
          }}>
            {children}
        </UserContext.Provider>
      );
  };
export { UserContextProvider, UserContext };
