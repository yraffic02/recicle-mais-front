import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";

export default function HowFind() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar />
        </Header>
        <main style={{height: "calc(100vh - 200px)"}}>
          <h1 className="font-workSans font-title text-xl leading-6 mb-9">
            Como deseja encontrar?
          </h1>
          <div className="flex flex-col justify-center gap-4">
            <Button typeButton="quaternary">Endereço</Button>
            <Button typeButton="quaternary">GPS</Button>
          </div>
        </main>
        <div className="flex flex-col justify-between">
          <Button typeButton="quinary">Continuar</Button>
        </div>
      </div>
    </>
  );
}
