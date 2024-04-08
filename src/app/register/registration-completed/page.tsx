import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";

export default function PageCompleted(){
    return(
        <main 
            className="flex flex-col justify-between items-center m11 h-full relative" 
            style={{ height: "calc(100vh - 5.5rem)" }}
        >
            <h1 className="text-xl font-semibold">Parabéns!!</h1>
            <Avatar />
            <h1 className="text-xl font-semibold">Sua conta foi criada com sucesso!</h1>
            <Button
                typeButton="primary"
            >
                Vamos lá!
            </Button>
        </main>
    )
}