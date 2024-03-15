"use client";
import {
  ReactNode,
  createContext,
  useContext
} from "react";

interface IUserProps {
  children: ReactNode;
}

export interface IUserContext {

}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export function UserProvider({ children }: IUserProps) {


  return (
    <UserContext.Provider value={''}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
