"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface ILoginProps {
  children: ReactNode;
}

export interface ILoginContext {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

export const UserContext = createContext<ILoginContext | undefined>(undefined);

export function LoginProvider({ children }: ILoginProps) {

  let [currentPage, setCurrentPage] = useState<string>("page1");

  return (
    <UserContext.Provider value={{ setCurrentPage, currentPage }}>
      {children}
    </UserContext.Provider>
  );
}

export const useLoginContext = () => useContext(UserContext);
