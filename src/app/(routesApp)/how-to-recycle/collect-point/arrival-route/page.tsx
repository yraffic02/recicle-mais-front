import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import Image from "next/image";

export default function ArrivalRoute() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar />
        </Header>
        <main style={{ height: "calc(100vh - 200px)" }}>
          <h1 className="font-workSans font-title text-xl leading-6 mb-9">
            Rota de Chegada
          </h1>
          <div className="flex flex-col h-[90%]">
            <div className="h-[20%] w-[100%]">
              <p className="font-workSans">Destino</p>
            </div>
            <div className="h-[80%] w-[100%] flex justify-center items-center">
              <Image
                src="/illustrations/illustration9.svg"
                height={0}
                width={0}
                alt="como reciclar"
                className="h-[100%] w-[100%]"
              />
            </div>
          </div>
        </main>
        <div className="flex flex-col justify-between">
          <Button typeButton="secondary">Continuar</Button>
        </div>
      </div>
    </>
  );
}
