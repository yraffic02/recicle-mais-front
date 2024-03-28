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
          border-b-[1px]
            text-black
            w-full
            h-12
            focus:placeholder-black"
      />
    );
  }
);

Output.displayName = "Output";
