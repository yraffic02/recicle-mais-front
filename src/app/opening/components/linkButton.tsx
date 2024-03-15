import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
}

type ButtonTextProps = {
    children: ReactNode;
}


function LinkButton({ children, ...props }: ButtonProps) {
    return (
        <button
            className="w-36 h-12  flex justify-center items-center"
            {...props}
        >
            {children}
        </button>
    )

}

function ButtonText({ children }: ButtonTextProps) {

    return (
        <span className="text-body font-workSans font-bold leading-6 text-cinzaEscuro">
            {children}
        </span>
    )
}

LinkButton.Text = ButtonText;

export { LinkButton };

