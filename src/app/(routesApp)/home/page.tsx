import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LinkButtonPrimary } from "./components/LinkButtonPrimary";
import { LinkButtonSecondary } from "./components/LinkButtonSecondary";

export const metadata: Metadata = {
    title: "Home",
};

export default function  HomePage (){
    return(
        <>
            <Header>
                <div></div>
                <h1 className="text-base font-medium">Título Página</h1>
                <Avatar />
            </Header>
            <main className="py-6 h-full flex flex-col items-center gap-9">
                <section className="flex items-center w-full">
                    <Image 
                        src='/logo/logo.svg'
                        height={24}
                        width={115}
                        alt="logo recicle mais"
                    />
                </section>
                <section className="flex items-center w-full justify-around">
                    <LinkButtonPrimary
                        hRef="#"
                    >
                        <Image 
                            src='/illustrations/illustration5.svg'
                            height={24}
                            width={115}
                            alt="logo recicle mais"
                        />
                        <span 
                            className="text-base font-medium"
                        >
                            Reciclar
                        </span>
                    </LinkButtonPrimary>
                    <LinkButtonPrimary
                        hRef='#'
                    >  
                        <Image 
                            src='/illustrations/illustration6.svg'
                            height={109}
                            width={128}
                            alt="logo recicle mais"
                        />
                        <span 
                            className="text-base font-medium"
                        >
                            Aprender
                        </span>
                    </LinkButtonPrimary>
                </section>
                <h2 className="text-base font-medium text-center">
                    Números que refletem o sucesso!
                </h2>
                <section className="w-full">
                    <LinkButtonSecondary
                        hRef="#"
                    >
                        <span 
                            className="text-base font-medium"
                        >
                             Reciclômetro
                        </span>
                        <Image 
                            src='/illustrations/illustration7.svg'
                            height={0}
                            width={0}
                            alt="logo recicle mais"
                            sizes="100vw"
                            className="absolute bottom-0"
                            style={{
                                width: '100%',
                                maxHeight: 'auto',
                                maxWidth: 'none', 
                            }}
                        />
                    </LinkButtonSecondary>
                </section>
            </main>
        </>
    )
}