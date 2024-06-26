import { Header } from "@/components/Header";
import { SecondaryHeaderButton } from "@/components/Header/components/ButtonActionSecondary";
import { HeaderProfile } from "./components/HeaderProfile";
import { ListOptions } from "./components/ListOptions";
import Link from "next/link";

export default function ProfilePage(){
    return(
        <>  
            <Header>
                <h1>Perfil</h1>
                <SecondaryHeaderButton 
                    srcIcon="/icons/notification.svg"
                />
            </Header>
            <main className="h-full w-full py-6">
                <section className="pb-[5rem]">
                    <HeaderProfile />
                </section>
                <section className="w-full flex flex-col items-start">

                    <h1 className="text-xl font-semibold pb-6">
                        Configurações
                    </h1>

                   <ListOptions />

                </section>

                <div className="pt-9">
                    <Link 
                        href='#'
                        className="text-vermelhoErro text-base underline"
                    >
                        Excluir Conta
                    </Link>
                </div>
            </main>
        </>
    )
}