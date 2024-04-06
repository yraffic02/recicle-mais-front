import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Image from "next/image";
import Link from "next/link";

export default function PageEmailSent() {
    return(
        <main className="p-6 relative" style={{ height: "calc(100vh - 5.5rem)" }} >
            <div className="flex flex-col items-center justify-center h-full gap-10">
                <Image 
                    src='/logo/logo.svg'
                    height={24}
                    width={115}
                    alt="logo recicle mais"
                />
                <h1 className="text-2xl font-semibold">Email enviado</h1>
                <h2 className="text-base text-cinzaClaro"> 
                    O e-mail com uma nova senha foi enviado com 
                    sucesso para a sua caixa de entrada. Por favor, 
                    verifique seu e-mail para acessar sua conta
                </h2>
                <div className="flex items-center justify-center gap-1 pt-3">
                    <p className="font-semibold">Volte para página de login</p>
                    <Link 
                        href='/opening/login'
                        className="text-verdeFloresta"
                    >
                       Clique aqui
                    </Link>
                </div>
            </div>
        </main>
    )
}