import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonTextProps = {
  children: ReactNode;
}

type ButtonLoginIconProps = {
  children: ReactNode;

}


function ButtonLogin({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full h-12 bg-cinzaClaroSec rounded-3xl flex justify-center items-center"
      {...rest}
    >
      {children}
    </button>
  )

}

function ButtonText({ children }: ButtonTextProps) {

  return (
    <span className="text-body font-workSans font-bold leading-6 text-cinzaClaro">
      {children}
    </span>
  )
}

function ButtonIcon({ children }: ButtonLoginIconProps) {
  return (
    <div className="w-6 h-6">
      {children}
    </div>
  )

}

ButtonLogin.Text = ButtonText;
ButtonLogin.Icon = ButtonIcon;

export { ButtonLogin };

