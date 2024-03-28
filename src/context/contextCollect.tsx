"use client"
import { ReactNode, createContext, useContext, useState } from "react";

interface ICollectProps {
  children: ReactNode;
}

export interface ICollectContext {
  selectedTrash: string;
  setSelectedTrash: (selectedTrash: string) => void;
}

export const CollectContext = createContext<ICollectContext | undefined>(undefined);

export function CollectProvider({ children }: ICollectProps) {
  const [selectedTrash, setSelectedTrash] = useState<string>("");
  console.log(selectedTrash, "SELECTED")

  return (
    <CollectContext.Provider value={{ setSelectedTrash, selectedTrash }}>
      {children}
    </CollectContext.Provider>
  );
}

export const useCollectContext = () => useContext(CollectContext);
