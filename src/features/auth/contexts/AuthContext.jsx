import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

// {
//   "usernameOrEmail": "test5@test.com",
//   "password": "123456Aa!"
// }

// Create the AuthContext

export const AuthProvider = ({ children }) => {
  const login = async (usernameOrEmail, password) => {
    const data = {
      usernameOrEmail: usernameOrEmail,
      password: password,
    };

    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:8420/auth/login",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
