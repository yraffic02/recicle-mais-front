import { Header } from "@/components/Header";
import { SecondaryActionButton } from "@/components/Header/components/ButtonActionSecondary";
import { HeaderProfile } from "./components/HeaderProfile";
import { ListOptions } from "./components/ListOptions";

export default function ProfilePage(){
    return(
        <>  
            <Header>
                <h1>Perfil</h1>
                <SecondaryActionButton 
                    srcIcon="/icons/notification.svg"
                />
            </Header>
            <main className="h-full w-full py-6">
                <section>
                    <HeaderProfile />
                </section>
                <section className="w-full flex flex-col items-start">

                    <h1 className="text-xl font-semibold">
                        Configurações
                    </h1>

                   <ListOptions />

                </section>
            </main>
        </>
    )
}