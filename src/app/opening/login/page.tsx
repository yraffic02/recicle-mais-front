"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { FormLogin } from "./components/FormLogin";


export default function LoginPage() {
  return (
    <div
      className="w-full flex flex-col justify-center items-center relative gap-7 media-mx-h"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >

      <Image
        src='/logo/logo.svg'
        alt='logo'
        width={115}
        height={24}
      />
      <div className="w-full flex justify-center items-center flex-col gap-3">
        <h1 className="text-title font-workSans font-title  text-center mb-2">
          Quase lá...<br />
          É hora de login!
        </h1>
        <Button
          typeButton="secondary"
        >
          <Image
            src='/icons/iconeGoogle.svg'
            height={24}
            width={24}
            alt="icone Google"
          />
          <p>Cadastrar com Google</p>
        </Button>
        <Button
          typeButton="secondary"
        >
          <Image
            src='/icons/iconeFacebook.svg'
            height={24}
            width={24}
            alt="icone Google"
          />
          <p>Cadastrar com Facebook</p>
        </Button>
      </div>
      <FormLogin />

    </div>
  )
}
