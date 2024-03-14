import { Header } from "@/components/Header";
import { SecondaryActionButton } from "@/components/Header/components/ButtonActionSecondary";

export default function ProfilePage(){
    return(
        <>  
            <Header>
                <h1>Perfil</h1>
                <SecondaryActionButton 
                    srcIcon="/icons/notification.svg"
                />
            </Header>
            <main className="h-full">
                <h1>page profile</h1>
            </main>
        </>
    )
}