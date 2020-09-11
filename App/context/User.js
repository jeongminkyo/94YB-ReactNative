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
        const googleLoginInfo = await GoogleSignin.signIn();
        const idToken = googleLoginInfo['idToken']
        const provider = 'google_oauth2'

        const response = await fetch(`https://yb94.name/api/auth/sign_in`, {
          method: 'POST',
          body: JSON.stringify({ idToken, provider }),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        
        let responseUserInfo = await response.json()

        if(responseUserInfo['access_token'] === null) {
          const response = await fetch(`https://yb94.name/api/auth/sign_up`, {
            method: 'POST',
            body: JSON.stringify({ idToken, provider }),
            headers:{
              'Content-Type': 'application/json'
            }
          })

          responseUserInfo = await response.json()
        }
        
        await AsyncStorage.setItem('refreshToken', responseUserInfo['refresh_token']).then(() => {
          setUserInfo({
            accessToken: responseUserInfo['access_token']
          });
          setIsLoading(true);
        })

      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          
        }
      }
    }

    const getUserInfo = async () => {
      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken')
        if (refreshToken) {
          const response = await fetch(`https://yb94.name/api/auth/token_renewal`, {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refreshToken })
          })
          const responseUserInfo = await response.json()

          setUserInfo({
            accessToken: responseUserInfo['access_token']
          });

          if(responseUserInfo['refresh_token']) {
            await AsyncStorage.setItem('refereshToken', responseUserInfo['refresh_token'])
          }
        }
        setIsLoading(true);
      } catch (error) {
        setUserInfo(undefined);
        setIsLoading(true);
      }
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
