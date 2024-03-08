import { ReactNode } from "react";
import { UserProvider } from "./contextUser";

interface ProviderProps {
    children: ReactNode
}

export default function Providers({children}: ProviderProps){
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}