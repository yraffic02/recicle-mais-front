import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";

export default function CollectPoint() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar />
        </Header>
        <main style={{ height: "calc(100vh - 200px)" }}>
          <h1 className="font-workSans font-title text-xl leading-6 mb-9">
            Qual seu tipo de lixo?
          </h1>
          <div className="flex flex-col justify-center gap-4">
            <Button typeButton="quaternary">Papel</Button>
            <Button typeButton="quaternary">Plástico</Button>
            <Button typeButton="quaternary">Vidro</Button>
            <Button typeButton="quaternary">Metal</Button>
            <Button typeButton="quaternary">Lixo Eletrônico</Button>
          </div>
        </main>
        <div className="flex flex-col justify-between">
          <Button typeButton="secondary">Continuar</Button>
        </div>
      </div>
    </>
  );
}
