import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header";
import { SecondaryActionButton } from "@/components/Header/components/ButtonActionSecondary";
import Image from "next/image";
import { HeaderProfile } from "./components/HeaderProfile";

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

                    <ul className="w-full">
                        <li className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image 
                                    src='/icons/profile.svg'
                                    height={24}
                                    width={24}
                                    alt="profile"
                                />
                                <p>Minha Conta</p>
                            </div>
                            <Image 
                                src='/icons/arrowRight.svg'
                                height={24}
                                width={24}
                                alt="profile"
                            />
                        </li>
                    </ul>

                </section>
            </main>
        </>
    )
}