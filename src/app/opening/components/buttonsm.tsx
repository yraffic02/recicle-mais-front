import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: string;
  size: number | string;
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonTextProps = {
  children: ReactNode;
  color?: string;
}


function Buttonsm({ children, size, color, ...rest }: ButtonProps) {
  return (
    <button
      className={`w-${size} h-12 bg-${color} rounded-3xl flex justify-center items-center`}
      {...rest}
    >
      {children}
    </button>
  )

}

function ButtonText({ children, color }: ButtonTextProps) {

  return (
    <span className={`text-body font-workSans font-body leading-6 ${color ? `text-${color}` : "text-black"} `}>
      {children}
    </span>
  )
}

Buttonsm.Text = ButtonText;

export { Buttonsm };

