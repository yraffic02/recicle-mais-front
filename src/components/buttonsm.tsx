import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  size: number | string;
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonTextProps = {
  children: ReactNode;
}


function Buttonsm({ children, size, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-${size} w- h-12 bg-verdeFloresta rounded-3xl flex justify-center items-center`}
      {...rest}
    >
      {children}
    </button>
  )

}

function ButtonText({ children }: ButtonTextProps) {

  return (
    <span className="text-body font-workSans font-body leading-6 text-white">
      {children}
    </span>
  )
}

Buttonsm.Text = ButtonText;

export { Buttonsm };

