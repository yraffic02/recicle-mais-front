"use client";
import React, { createContext, useContext, useState } from "react";

const CollectContext = createContext<any>(null);

export function useCollectContext() {
  return useContext(CollectContext);
}

export function CollectProvider({ children }: { children: React.ReactNode }) {
  const [selectedTrash, setSelectedTrash] = useState<string>("");
  const [selectedTypeTrash, setSelectedTypeTrash] = useState<string>("");
  const [indexSelectedTrash, setIndexSelectedTrash] = useState<number>();

  const handleClickCollectPoint = (
    street: string,
    distance: string,
    index: number
  ) => {
    setSelectedTrash(`${street}, ${distance}`);
    setIndexSelectedTrash(index);
  };

  const handleClickTypeTrashSelected = (TypeTrash: string) => {
    setSelectedTypeTrash(TypeTrash);
  };

  const value = {
    selectedTrash,
    handleClickCollectPoint,
    handleClickTypeTrashSelected,
    selectedTypeTrash,
    indexSelectedTrash,
  };

  return (
    <CollectContext.Provider value={value}>{children}</CollectContext.Provider>
  );
}
