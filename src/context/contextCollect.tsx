"use client"
import React, { createContext, useContext, useState } from "react";

const CollectContext = createContext<any>(null);

export function useCollectContext() {
  return useContext(CollectContext);
}

export function CollectProvider({ children }: { children: React.ReactNode }) {
  const [selectedTrash, setSelectedTrash] = useState<string>("");
  const [selectedTypeTrash, setSelectedTypeTrash] = useState<string>("");

  const handleClickCollectPoint = (street: string, distance: string) => {
    setSelectedTrash(`${street}, ${distance}`);
    console.log(selectedTrash)
  };

  const handleClickTypeTrashSelected = (TypeTrash: string) => {
    setSelectedTypeTrash(TypeTrash);
    console.log(selectedTypeTrash)
  };

  const value = {
    selectedTrash,
    handleClickCollectPoint,
    handleClickTypeTrashSelected,
    selectedTypeTrash
  };

  return <CollectContext.Provider value={value}>{children}</CollectContext.Provider>;
}