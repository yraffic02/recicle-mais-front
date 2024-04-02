"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState
} from "react";

interface IUserProps {
  children: ReactNode;
}

export interface IUserContext {
  avatar: string,
  setAvatar: (avatar: string) => void
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export function UserProvider({ children }: IUserProps) {
  const [avatar, setAvatar] = useState('')

  return (
    <UserContext.Provider 
      value={
        {
          avatar,
          setAvatar
        }
      }
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
