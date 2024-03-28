"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { Output } from "@/components/Output";
import Image from "next/image";
import nearDatasTrash from "./nearDatasTrash";
import { useCollectContext } from "@/context/contextCollect";

export default function NearTrash() {
  const { handleClickCollectPoint } = useCollectContext();

  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar />
        </Header>
        <main style={{ height: "calc(100vh - 200px)" }}>
          <h1 className="font-workSans font-title text-xl leading-6 mb-9">
            Lixeiras próximas
          </h1>
          <div className="flex flex-col justify-center gap-4">
            <Output>Rua Costa Barros, Campinas, SP</Output>
            <ul>
              {nearDatasTrash.map((nearTrash, index) => (
                <li
                  key={index}
                  onClick={() =>
                    handleClickCollectPoint(
                      nearTrash.street,
                      nearTrash.distance
                    )
                  }
                  className="flex items-center border-b-[1px] gap-3 py-2 cursor-pointer"
                >
                  <Image
                    src="/icons/trash.svg"
                    height={36}
                    width={36}
                    alt="trash icon"
                  />
                  {`${nearTrash.street} / ${nearTrash.distance}`}
                </li>
              ))}
            </ul>
          </div>
        </main>
        <div className="flex flex-col justify-between">
          <Button typeButton="quinary">Continuar</Button>
        </div>
      </div>
    </>
  );
}
