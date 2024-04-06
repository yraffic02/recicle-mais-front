import { Options } from "./components/Options"

export const ListOptions = () =>{
    return(
        <ul className="w-full">
            <Options 
                icon="profile"
                name="Minha Conta"
                hRef="/profile"
            />
            <Options 
                icon="notificationFilled"
                name="Notificações"
                hRef="#"
            />
            <Options 
                icon="security"
                name="Segurança e Privacidade"
                hRef="#"
            />
            <Options 
                icon="termsFilled"
                name="Termos de uso"
                hRef="#"
            />
            <Options 
                icon="logout"
                name="Sair"
                hRef="#"
            />
        </ul>
    )
}