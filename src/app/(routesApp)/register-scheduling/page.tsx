"use client";

import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { useStep } from "@/hooks/useHookStep";
import Image from "next/image";
import Link from "next/link";
import FormAdress from "./form-adress/FormAdress";
import FormContact from "./form-contact/FormContact";

export default function RegisterScheduling() {
  const { curretStep, handleToAddCurretStep } = useStep({ number: 1 });

  return (
    <div className="h-screen flex flex-col justify-between w-full">
      <div className="h-full">
        <Header>
          <h1 className="text-base font-medium">Cadastro</h1>
          <Avatar typeAvatar="sm"/>
        </Header>
        <main>
          <h2 className="font-semibold text-cinzaEscuro mt-6 mb-6">
            Continue seu cadastro para que possamos te conectar com os nossos
            catadores!
          </h2>
          {curretStep === 0 && (
            <div className="flex w-full mb-6">
              <div className="w-[50%]">
                <Image
                  className="w-full"
                  src="/icons/check1noverify.svg"
                  alt="Next.js"
                  width={164}
                  height={34}
                />
              </div>
              <div className="w-[50%]">
                <Image
                  className="w-full"
                  src="/icons/check2gray.svg"
                  alt="Next.js"
                  width={164}
                  height={34}
                />
              </div>
            </div>
          )}
          {curretStep === 1 && (
            <div className="flex w-full mb-6">
              <div className="w-[50%]">
                <Image
                  className="w-full"
                  src="/icons/check1verify.svg"
                  alt="Next.js"
                  width={164}
                  height={34}
                />
              </div>
              <div className="w-[50%]">
                <Image
                  className="w-full"
                  src="/icons/check2green.svg"
                  alt="Next.js"
                  width={164}
                  height={34}
                />
              </div>
            </div>
          )}
          <div>
            {curretStep === 0 && <FormContact />}
            {curretStep === 1 && <FormAdress />}
          </div>
        </main>
      </div>
      {curretStep === 0 && (
        <Button typeButton="quinary" onClick={handleToAddCurretStep}>
          Continuar
        </Button>
      )}
      {curretStep === 1 && (
        <Link href="register-scheduling/congratulations">
          <Button typeButton={"quinary"}>Continuar</Button>
        </Link>
      )}
    </div>
  );
}
