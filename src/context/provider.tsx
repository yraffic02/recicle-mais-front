import { ReactNode } from "react";
import { UserProvider } from "./contextUser";

interface ProviderProps {
    children: ReactNode
}

export default function ProvidersMenu({children}: ProviderProps){
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}