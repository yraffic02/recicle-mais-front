import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Image from "next/image";
import Link from "next/link";

export default function PageRecover() {
    return(
        <main className="p-6 relative" style={{ height: "calc(100vh - 5.5rem)" }} >
            <Header>
                <h1
                className="font-medium"
                >
                    Esqueci Senha
                </h1>
                <div></div>
            </Header>
            <div className="flex flex-col items-center justify-between h-full pt-11 media-md-h">

                <div className="flex flex-col justify-center items-center gap-10">
                    <Image 
                        src='/logo/logo.svg'
                        height={24}
                        width={115}
                        alt="logo recicle mais"
                    />
                    <h1 className="text-2xl font-semibold">Esqueceu a senha?</h1>
                    <h2 className="text-base text-cinzaClaro"> 
                        Para redefinir sua senha, por favor informe o e-mail associado à sua conta.
                        Enviaremos uma nova senha para este endereço de e-mail, 
                        permitindo que você acesse o aplicativo e defina uma nova senha de sua escolha.
                    </h2>
                </div>

                <div className="w-full h-full flex flex-col pt-8 gap-28">
                    <div className="flex flex-col gap-2 w-full">
                        <Label labelHtmlFor="email">
                            E-mail
                        </Label>
                        <Input 
                            placeholder="Digite seu e-mail aqui"
                        />
                    </div>
                </div>
                
                <Button
                    type="submit"
                    typeButton="primary"
                    className=""
                >
                    Enviar código de redefinição
                </Button>
                <div className="flex items-center justify-center gap-1 pt-3">
                    <p className="font-semibold">Não tem conta?</p>
                    <Link 
                        href='/register'
                        className="text-verdeFloresta"
                    >
                        Cadastre-se.
                    </Link>
                </div>
            </div>
        </main>
    )
}