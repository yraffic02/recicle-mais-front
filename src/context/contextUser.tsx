"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface IUserProps {
  children: ReactNode;
}

export interface IUserContext {
  teste: string;
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

export const UserContext = createContext<any>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {

  let [currentPage, setCurrentPage] = useState<string>("page1");

  return (
    <UserContext.Provider value={{ setCurrentPage, currentPage }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
