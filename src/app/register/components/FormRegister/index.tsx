'use client'
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const FormRegister = () =>{
    const [formState, setFormState] = useState(false)

    const handleFormState = () =>{
        setFormState(!formState)
    }

    return(
        <div className="media-md-h">
            <section className="flex flex-col items-center justify-center gap-4">
                <Image 
                    src='/logo/logo.svg'
                    height={24}
                    width={115}
                    alt="logo recicle mais"
                />

                {
                    formState &&
                    <h2 className="font-semibold text-cinzaEscuro">
                       Quase lá! Escolha um avatar que melhor 
                       te representa para continuar seu cadastro
                    </h2>
                }

                {
                    !formState &&
                    <h2 className="font-semibold text-cinzaEscuro">
                        Faça parte deste movimento, 
                        e ajude o mundo a se tornar cada vez mais limpo 
                        e sustentável!
                    </h2>
                }

                {
                    !formState &&
                    <>
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
                    </>
                }
            </section>

            {
                !formState && 
                <div className="w-full pt-5">
                    <h1 className="font-semibold text-cinzaEscuro text-center">
                        Ou
                    </h1>
                </div> 
            }

            <form>
                {
                    !formState &&
                    <section className="flex flex-col items-start gap-2 mb-3 pb-20">
                
                        <Label labelHtmlFor="name">Nome</Label>
                        <Input id="name" placeholder="Digite aqui o seu nome" />

                        <Label labelHtmlFor="email">Entrar com outro e-mail</Label>
                        <Input id="email" placeholder="Digite seu email" />

                        <Label labelHtmlFor="password">Senha</Label>
                        <Input id="password" placeholder="Digite uma senha" />

                        <Label labelHtmlFor="confirm">Confirmar senha</Label>
                        <Input id="confirm" placeholder="Digite novamente sua senha" />
                    </section>
                }

                {
                    formState && 
                    <h1>avatares</h1>
                }

                {
                    formState &&
                    <div className="flex flex-col items-center justify-center gap-2  w-full absolute bottom-0">
                        <Button
                            typeButton="primary"
                        >
                            Criar Conta
                        </Button>
                        <div className="flex items-center justify-center gap-1">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                className="h-5 w-5 rounded" 
                            />
                            <label 
                                htmlFor="terms"
                                className="font-semibold text-sm"
                            >
                                Aceito os termos e políticas de privacidade
                            </label>
                        </div>  
                    </div> 
                }
            </form>
           {
            !formState &&
            <div className="flex flex-col items-center justify-center gap-1 bg-white w-full absolute bottom-0">
                <Button
                    typeButton="primary"
                    onClick={handleFormState}
                >
                    Continuar
                </Button>
                <div className="flex items-center justify-center gap-1">
                    <p className="font-semibold">Já possui uma conta?</p>
                    <Link 
                        href='/opening/login'
                        className="font-semibold text-verdeFloresta  underline hover:underline"
                    >
                        Entrar
                    </Link>
                </div>
            </div> 
           }
        </div>
    )
}