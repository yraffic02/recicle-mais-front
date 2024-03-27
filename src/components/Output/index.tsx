import {
    OutputHTMLAttributes,
    forwardRef
  } from "react";
  
  type OutputProps = OutputHTMLAttributes<HTMLOutputElement>;
  
  export const Output = forwardRef<HTMLOutputElement, OutputProps>(
    ({ name, ...rest }, ref) => {
      return (
        <output
          {...rest}
          name={name}
          ref={ref}
          className="
            border-cinzaClaroSec 
            text-black
            border-[0.06rem] 
            rounded-[2rem] 
            p-3 
            w-full
            focus:placeholder-black"
        />
      );
    },
  );
  
  Output.displayName = "Output";