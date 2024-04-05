import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, ...rest }, ref) => {
    return (
      <input
        {...rest}
        name={name}
        ref={ref}
        className="      
          border-cinzaClaroSec 
          text-cinzaEscuro 
          border-[0.06rem] 
          rounded-[2rem] 
          p-3 
          w-full
          focus:placeholder-black"
      />
    );
  }
);

Input.displayName = "Input";
