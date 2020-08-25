import React, {createContext, useState, useEffect} from 'react';

const UserContext = createContext({
    isLoading: false,
    userInfo: undefined
  });

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <UserContext.Provider
          value={
            isLoading,
            userInfo
          }>
            {children}
        </UserContext.Provider>
      );
  };
export { UserContextProvider, UserContext };