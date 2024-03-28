"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { useCollectContext } from "@/context/contextCollect";
import Link from "next/link";
import { useState } from "react";

export default function CollectPoint() {
  const { handleClickTypeTrashSelected, selectedTypeTrash } =
    useCollectContext();
  const [message, setMessage] = useState("");

  const handleClickGoToHowFind = () => {
    if (!selectedTypeTrash) {
      setMessage("Selecione um tipo de lixo.");
      console.log(message, "MENSAGEM");
    }
  };

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
            <Button
              onClick={() => handleClickTypeTrashSelected("papel")}
              typeButton="quaternary"
            >
              Papel
            </Button>
            <Button
              onClick={() => handleClickTypeTrashSelected("Plásico")}
              typeButton="quaternary"
            >
              Plástico
            </Button>
            <Button
              onClick={() => handleClickTypeTrashSelected("Vidro")}
              typeButton="quaternary"
            >
              Vidro
            </Button>
            <Button
              onClick={() => handleClickTypeTrashSelected("Metal")}
              typeButton="quaternary"
            >
              Metal
            </Button>
            <Button
              onClick={() => handleClickTypeTrashSelected("Lixo eletrônico")}
              typeButton="quaternary"
            >
              Lixo Eletrônico
            </Button>
          </div>
        </main>
        <div className="flex flex-col justify-between">
          {message && (
            <span className="block text-red-700 text-center mb-10px">
              {message}
            </span>
          )}
          {selectedTypeTrash && (
            <Link href="how-find">
              <Button typeButton="quinary">Continuar</Button>
            </Link>
          )}
          {!selectedTypeTrash && (
            <Button onClick={handleClickGoToHowFind} typeButton="quinary">
              Continuar
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
