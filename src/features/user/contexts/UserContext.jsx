import { createContext, useContext, useEffect, useState } from "react";
import * as UserApi from "../../../api/user";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const upDateUserById = async (id, data) => {
    const response = await UserApi.upDateUserById(id, data);
    return response.data;
  };

  const test = () => {
    console.log("I'm from user context");
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        upDateUserById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
