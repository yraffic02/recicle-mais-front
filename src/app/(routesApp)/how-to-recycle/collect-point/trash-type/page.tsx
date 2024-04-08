"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { useCollectContext } from "@/context/contextCollect";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CollectPoint() {
  const router = useRouter();
  const { handleClickTypeTrashSelected, selectedTypeTrash, selectedButton } =
    useCollectContext();
  const [message, setMessage] = useState("");

  const handleClickGoToHowFind = () => {
    if (selectedTypeTrash) {
      router.push("how-find");
    } else {
      setMessage("Selecione um tipo de lixo.");
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
            <span className="block text-red-700 text-center mb-1">
              {message}
            </span>
          )}
          <Button
            onClick={() => handleClickGoToHowFind()}
            typeButton={selectedButton ? "primary" : "quinary"}
          >
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
}
