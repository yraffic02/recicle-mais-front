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
  texto: string;
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

export function LoginProvider({ children }: ILoginProps) {

  let [currentPage, setCurrentPage] = useState<string>("page1");
  const texto = "teste";

  return (
    <LoginContext.Provider value={{ setCurrentPage, texto, currentPage }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLoginContext = () => useContext(LoginContext);
