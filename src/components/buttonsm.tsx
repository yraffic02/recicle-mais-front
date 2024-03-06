import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonTextProps = {
  children: ReactNode;
}


function Buttonsm({ children, color, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-36 h-12 bg-${color} rounded-3xl flex justify-center items-center`}
      {...rest}
    >
      {children}
    </button>
  )

}

function ButtonText({ children }: ButtonTextProps) {

  return (
    <span className="text-body font-workSans font-bold leading-6 text-white">
      {children}
    </span>
  )
}

Buttonsm.Text = ButtonText;

export { Buttonsm };

