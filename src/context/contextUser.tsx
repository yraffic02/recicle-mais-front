"use client";
import {
  ReactNode,
  createContext,
  useContext,
} from "react";

interface IUserProps {
  children: ReactNode;
}

interface IUserContext {}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({ children }: IUserProps) {

  const valuesContext: IUserContext = {};

  return (
    <UserContext.Provider value={valuesContext}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
