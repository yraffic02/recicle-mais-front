import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Image from "next/image";
import Link from "next/link";

export default function PageRegister(){
    return(
        <main className="flex flex-col justify-between h-[570px] overflow-auto">
            <section className="flex flex-col items-center justify-center gap-4">

                <Image 
                    src='/logo/Logo.svg'
                    height={24}
                    width={115}
                    alt="logo recicle mais"
                />

                <h2 className="font-workSans font-semibold text-cinzaEscuro">
                    Faça parte deste movimento, 
                    e ajude o mundo a se tornar cada vez mais limpo 
                    e sustentável!
                </h2>

                <Button
                    typeButton="secondary"
                >
                    <Image 
                        src='/icons/iconeGoogle.svg'
                        height={24}
                        width={24}
                        alt="icone Google"
                    />
                    <p>Cadastrar com Google</p>
                </Button>

                <Button
                    typeButton="secondary"
                >   
                    <Image 
                        src='/icons/iconeFacebook.svg'
                        height={24}
                        width={24}
                        alt="icone Google"
                    />
                    <p>Cadastrar com Facebook</p>
                </Button>
            </section>

            <div className="w-full pt-5">
                <h1 className="font-semibold text-cinzaEscuro text-center">
                    Ou
                </h1>
            </div> 

            <section>
                <form className="flex flex-col items-start gap-2 mb-3">
                    <Label labelHtmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Digite aqui o seu nome" />

                    <Label labelHtmlFor="email">Entrar com outro e-mail</Label>
                    <Input id="email" placeholder="Digite seu email" />

                    <Label labelHtmlFor="password">Senha</Label>
                    <Input id="password" placeholder="Digite uma senha" />

                    <Label labelHtmlFor="confirm">Confirmar senha</Label>
                    <Input id="confirm" placeholder="Digite novamente sua senha" />

                </form>
                <Button
                    typeButton="primary"
                >
                    Continuar
                </Button>
                <div className="flex items-center justify-center">
                    <p>Já possui uma conta?</p>
                    <Link 
                        href='/login'
                    >
                        Entrar
                    </Link>
                </div>
            </section>
        </main>
    )
}