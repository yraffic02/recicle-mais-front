"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { Output } from "@/components/Output";
import Image from "next/image";
import nearDatasTrash from "./nearDatasTrash";
import { useCollectContext } from "@/context/contextCollect";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NearTrash() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const { handleClickCollectPoint, selectedTrash, indexSelectedTrash } = useCollectContext();
  const [locality, setLocality] = useState("Rua Costa Barros, Campinas, SP");

  const handleClickGoTo = () => {
    if (selectedTrash) {
      router.push("arrival-route");
    } else {
      setMessage("Escolha um destino.");
    }
  };

  useEffect(() => {
    const adressStorageJson = localStorage.getItem("formValues");
    if (adressStorageJson !== null) {
      const adressStorage = JSON.parse(adressStorageJson);
      setLocality(
        `${adressStorage.endereco}, ${adressStorage.municipio}, ${adressStorage.estado}`
      );
    }
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar typeAvatar="sm" />
        </Header>
        <main style={{ height: "calc(100vh - 200px)" }}>
          <h1 className="font-workSans font-title text-xl leading-6 mb-9">
            Lixeiras próximas
          </h1>
          <div className="flex flex-col justify-center gap-4">
            <Output>{locality}</Output>
            <ul>
              {nearDatasTrash.map((nearTrash, index) => (
                <li
                  key={index}
                  onClick={() =>
                    handleClickCollectPoint(                      
                      nearTrash.street,
                      nearTrash.distance,
                      index
                    )
                  }
                  className={`flex items-center border-b-[1px] gap-3 py-2 cursor-pointer  ${index === indexSelectedTrash ? "font-bold" : ""}`}
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
          {message && (
            <span className="block text-red-700 text-center mb-1">
              {message}
            </span>
          )}
          <Button onClick={() => handleClickGoTo()} typeButton={selectedTrash ? "primary" : "quinary"}>
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
}
