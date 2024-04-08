import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { Metadata } from "next";
import Image from "next/image";
import { LinkButtonPrimary } from "./components/LinkButtonPrimary";
import { LinkButtonSecondary } from "./components/LinkButtonSecondary";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

export const metadata: Metadata = {
    title: "Home",
};

export default function  HomePage () {
    return(
        <>
            <Header>
                <Link href='/menu'>
                    <MenuIcon />
                </Link>
                <h1 className="text-base font-medium">Página Inicial</h1>
                <Avatar typeAvatar='sm'/>
            </Header>
            <main className="py-6 h-full flex flex-col items-center justify-around">
                <section className="flex items-center w-full">
                    <Image 
                        src='/logo/logo.svg'
                        height={24}
                        width={115}
                        alt="logo recicle mais"
                    />
                </section>
                <section className="w-full">
                    <LinkButtonSecondary
                        hRef="#"
                        name=" Reciclômetro"
                    />
                </section>
                <section className="flex items-center w-full gap-3">
                    <LinkButtonPrimary
                        hRef="/how-to-recycle"
                        name="Reciclar"
                    >
                        <Image 
                            src='/illustrations/illustration5.svg'
                            height={24}
                            width={115}
                            alt="logo recicle mais"
                            className="mt-2"
                        />
                    </LinkButtonPrimary>
                    <LinkButtonPrimary
                        hRef='#'
                        name="Aprender"
                    >  
                        <Image 
                            src='/illustrations/illustration6.svg'
                            height={109}
                            width={128}
                            alt="logo recicle mais"
                        />
                    </LinkButtonPrimary>
                </section>
            </main>
        </>
    )
}
