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
          border-[1px]
          rounded-[32px]
          pl-4
          pr-4
            text-black
            w-full
            h-12
            focus:placeholder-black"
      />
    );
  }
);

Output.displayName = "Output";
