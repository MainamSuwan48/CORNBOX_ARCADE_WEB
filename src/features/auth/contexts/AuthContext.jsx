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

  useEffect(() => {
    const token = getToken();
    if (token) {
      authApi.getMe().then((res) => {
        console.log(res.data.user);
        setAuthUser(res.data.user);
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
    console.log(response.data);
    storeToken(response.data.token);
  };
const register = async (email, username, password) => {
  const data = {
    username: username,
    email: email,
    password: password,
    confirmPassword: password
  };
  console.log(data);
  const response = await authApi.register(data);
  console.log(response.data);
  storeToken(response.data.token);
  

}
  const logout = () => {
    setAuthUser(null);
    deleteToken();
  };

  return (
    <AuthContext.Provider value={{ login, logout,register }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
