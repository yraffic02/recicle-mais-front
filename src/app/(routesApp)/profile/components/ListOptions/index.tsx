import { Options } from "./components/Options"

export const ListOptions = () =>{
    return(
        <ul className="w-full">
            <Options 
                icon="profile"
                name="Minha Conta"
            />
            <Options 
                icon="notificationFilled"
                name="Notificações"
            />
            <Options 
                icon="security"
                name="Segurança e Privacidade"
            />
            <Options 
                icon="termsFilled"
                name="Termos de uso"
            />
            <Options 
                icon="logout"
                name="Sair"
            />
        </ul>
    )
}