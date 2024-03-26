"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState
} from "react";

interface ICollectProps {
  children: ReactNode;
}

export interface ICollectContext {

}

export const CollectContext = createContext<ICollectContext | undefined>(undefined);

export function CollectProvider({ children }: ICollectProps) {
  const [curretStep, setCurrentStep] = useState<number>(0)

  const handleToAddCurretStep = () => {
      if(curretStep < 6){
          return  setCurrentStep(curretStep + 1)
      }
      return
  }

  const handleToDecreaseCurretStep  = () => {
      if(curretStep > 0){
          return  setCurrentStep(curretStep - 1)
      }
      return
  }

  return (
    <CollectContext.Provider value={''}>
      {children}
    </CollectContext.Provider>
  );
}

export const useCollectContext = () => useContext(CollectContext);
