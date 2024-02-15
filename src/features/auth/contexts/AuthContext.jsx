import React, { createContext, useContext, useEffect, useState } from "react";
import * as authApi from "../../../api/auth";
import {
  storeToken,
  getToken,
  deleteToken,
} from "../../../utils/local-storage";

export const AuthContext = createContext();

// {
//   "usernameOrEmail": "test5@test.com",
//   "password": "123456Aa!"
// }

// Create the AuthContext

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const fetchMe = async () => {
    const token = getToken();
    if (!token) {
      return null;
    }
    const response = await authApi.getMe(token);
    return response.data;
  };
  useEffect(() => {
    const token = getToken();
    if (token) {
      fetchMe().then((user) => {
        setAuthUser(user);
      });
    }
  }, []);

  const login = async (usernameOrEmail, password) => {
    const data = {
      usernameOrEmail: usernameOrEmail,
      password: password,
    };

    console.log(data);
    const response = await authApi.login(data);    
    storeToken(response.data.token);
    return response.data;
  };
  const register = async (email, username, password) => {
    const data = {
      username: username,
      email: email,
      password: password,
      confirmPassword: password,
    };
    console.log(data);
    const response = await authApi.register(data);
    console.log(response.data);
    storeToken(response.data.token);
    return response.data;
  };
  const logout = () => {
    setAuthUser(null);
    deleteToken();
  };

  const test = () => {
    console.log(authUser);
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, register, test, authUser, setAuthUser,fetchMe }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
