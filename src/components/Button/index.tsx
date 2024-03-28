import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    typeButton: ButtonType
}

export const Button = ({children, typeButton, ...props}: ButtonProps) =>{
    
    return(
        <button
            {...props}
            className={
                `w-full 
                flex 
                items-center 
                justify-center 
                gap-2 
                p-3 
                rounded-[2rem] 
                ${typeButton === "primary" ? "bg-verdeFloresta" : "bg-cinzaClaroSec"}
                ${typeButton === "primary" ? "text-white" : "text-cinzaClaro"}
                ${typeButton === "primary" ? "hover:bg-green-900" : "hover:bg-[#3292F2]"}
                ${typeButton === "secondary" ? "hover:text-white" : ""}
                ${typeButton === "tertiary" ? "bg-verdeClaro" : ""}
                ${typeButton === "tertiary" ? "text-verdeFloresta" : ""}
                ${typeButton === "tertiary" ? "hover:bg-verdeFloresta" : ""}
                ${typeButton === "tertiary" ? "hover:text-brancoAbsoluto" : ""}
                ${typeButton === "quaternary" ? "bg-brancoAbsoluto" : ""}
                ${typeButton === "quaternary" ? "hover:bg-verdeClaro" : ""}
                ${typeButton === "quaternary" ? "hover:text-verdeFloresta" : ""}
                font-medium 
                text-base`
            }
            
        >
            {children}
        </button>
    )
}