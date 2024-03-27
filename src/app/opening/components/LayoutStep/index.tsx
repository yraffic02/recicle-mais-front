import { ReactNode } from "react"

interface LayoutStepProps {
    children: ReactNode
}

export const LayoutStep = ({children}: LayoutStepProps) =>{
    return(
        <section
            className="h-full w-full flex flex-col justify-evenly items-center"
        >
            {children}
        </section>
    )
}