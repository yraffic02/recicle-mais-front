import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { Metadata } from "next";
import Image from "next/image";

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
            <main className="py-6">
                
            </main>
        </>
    )
}