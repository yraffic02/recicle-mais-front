import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function PageRegister(){
    return(
        <main>
            <Header>
                <h1
                    className="font-medium"
                >
                    Cadastro
                </h1>
                <div></div>
            </Header>

            <div className="flex flex-col items-center justify-center gap-4">
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
                        height={10}
                        width={10}
                        alt="icone Google"
                    />
                    <p>Cadastrar com Google</p>
                </Button>
                <Button
                    typeButton="secondary"
                >   
                    <Image 
                        src='/icons/iconeFacebook.svg'
                        height={10}
                        width={10}
                        alt="icone Google"
                    />
                    <p>Cadastrar com Facebook</p>
                </Button>
            </div>
                
        </main>
    )
}