import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonType = 'primary' | 'secondary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    typeButton: ButtonType
}

export const Button = ({children, typeButton, ...props}: ButtonProps) =>{
    
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