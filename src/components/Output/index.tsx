import { OutputHTMLAttributes, forwardRef } from "react";

type OutputProps = OutputHTMLAttributes<HTMLOutputElement>;

export const Output = forwardRef<HTMLOutputElement, OutputProps>(
  ({ name, ...rest }, ref) => {
    return (
      <output
        {...rest}
        name={name}
        ref={ref}
        className="
          flex
          items-center
          gap-4
          mt-[5%]
            text-black
            rounded-[2rem] 
            w-full
            focus:placeholder-black"
      />
    );
  }
);

Output.displayName = "Output";
