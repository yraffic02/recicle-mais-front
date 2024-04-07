"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import Link from "next/link";
import { useState } from "react";

export default function HowFind() {
  const [selectedOption, setSelectedOption] = useState("");
  const [adressStorage, setAdressStorage] = useState("");
  const [error, setError] = useState("");

  const handleClickSelectedOption = (option: string) => {
    if (option === "myAdress") {
      const adress = localStorage.getItem("formValues");
      if (!adress) {
        setError("Não há email cadastrado.");
      } else {
        setSelectedOption("adress");
        console.log(adress, "ADRESS");
      }
    } else {
      setSelectedOption(option);
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
            Como deseja encontrar?
          </h1>
          <div className="flex flex-col justify-center gap-4">
            <Button
              onClick={() => handleClickSelectedOption("adress")}
              typeButton="quaternary"
            >
              Endereço
            </Button>
            <Button
              onClick={() => handleClickSelectedOption("gps")}
              typeButton="quaternary"
            >
              GPS
            </Button>
          </div>
          <h1 className="m-4 text-center">Ou</h1>
          <Button
            onClick={() => handleClickSelectedOption("myAdress")}
            typeButton="quinary"
          >
            Usar meu endereço cadastrado
          </Button>
          <div className="flex mt-2 font-workSans justify-center text-[14px] font-bold">
            <p>{`Não possui endereço cadastrado?  .`}</p>
            <a href="/register-scheduling" className="text-verdeFloresta">
              Clique aqui
            </a>
          </div>
        </main>
        <div className="flex flex-col justify-between">
          {error && <span className="text-vermelhoErro text-center mb-2">{error}</span>}
          <Link href={selectedOption}>
            <Button typeButton="quinary">Continuar</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
