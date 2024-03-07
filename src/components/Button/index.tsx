import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    typeButton?: string
}

export const Button = ({children, typeButton = 'primary', ...props}: ButtonProps) =>{
    
    if(typeButton === "secondary"){
        return(
            <button
                {...props}
                className="w-full p-3 rounded-[2rem] hover:opacity-85 bg-cinzaClaroSec text-cinzaClaro font-medium text-base"
            >
                {children}
            </button>
        )
    }
    
    return(
        <button
            {...props}
            className="w-full p-3 rounded-[2rem] hover:opacity-85 bg-verdeFloresta text-white font-medium text-base"
        >
            {children}
        </button>
    )
}