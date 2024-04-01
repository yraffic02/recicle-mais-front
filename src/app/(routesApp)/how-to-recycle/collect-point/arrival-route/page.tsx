"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { useCollectContext } from "@/context/contextCollect";
import Image from "next/image";
import ModalStars from "./modal-star";

export default function ArrivalRoute() {
  const { selectedTrash } = useCollectContext();
  console.log(selectedTrash);
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
            <div className="h-[20%] w-[100%] flex flex-col justify-end">
              <p className="font-workSans">Destino</p>
              <div className="flex items-center gap-4 mt-3 border-b-[1px] pb-2 mb-2">
                <Image
                  src="/icons/trash.svg"
                  height={36}
                  width={36}
                  alt="trash icon"
                />
                {selectedTrash.replace(",", " /")}
              </div>
            </div>
            <div className="relative h-[80%] w-[100%] flex justify-center items-center">
              <Image
                src="/illustrations/illustration9.svg"
                height={0}
                width={0}
                alt="como reciclar"
                className="h-[100%] w-[100%]"
              />
              <ModalStars/>
            </div>
          </div>
        </main>
        <div className="flex flex-col justify-between">
          <Button typeButton="quinary">Continuar</Button>
        </div>
      </div>
    </>
  );
}
