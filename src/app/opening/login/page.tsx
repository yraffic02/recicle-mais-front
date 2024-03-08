"use client";

import { ButtonLogin } from "@/components/buttonlogin";
import { Buttonsm } from "@/components/buttonsm";
import { InputPageLogin } from "@/components/inputPageLogin";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex h-screen justify-start items-center flex-col gap-6 p-6">
      <div className="w-full h-full flex flex-col justify-start items-center mb-9 mt-24 ">
        <Image
          className="mb-9"
          src={'/logo/logo.svg'}
          alt={'logo'}
          width={115}
          height={24}
        />
        <div className="w-full flex justify-center items-center text-center mb-8">
          <h1 className="text-title font-workSans font-title leading-7">
            Quase lá...<br />
            É hora de login!
          </h1>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-3 mb-8">
          <ButtonLogin>
            <ButtonLogin.Icon>
              <Image
                src={'/icons/icone_google.svg'}
                alt={'google'}
                width={24}
                height={24}
              />
            </ButtonLogin.Icon>
            <ButtonLogin.Text>
              Entrar com Google
            </ButtonLogin.Text>
          </ButtonLogin>
          <ButtonLogin>
            <ButtonLogin.Icon>
              <Image
                src={'/icons/icone_facebook.svg'}
                alt={'google'}
                width={24}
                height={24}
              />
            </ButtonLogin.Icon>
            <ButtonLogin.Text>
              Entrar com Google
            </ButtonLogin.Text>
          </ButtonLogin>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <InputPageLogin
            label="E-mail"
            name="email"
            placeholder="Digite seu e-mail"
            type="text"
          />
          <InputPageLogin
            label="Senha"
            name="senha"
            placeholder="Digite sua senha"
            type="password"
          />
          <div className="w-full flex justify-end items-end mt-3 mb-9">
            <strong className="text-body font-body font-workSans text leading-6 text-verdeFloresta">
              Esqueci minha senha
            </strong>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <Buttonsm size={"full"}>
          <Buttonsm.Text>
            Entrar
          </Buttonsm.Text>
        </Buttonsm>
        <span className="text-body font-body font-workSans leading-6 text-black">
          Não tem conta ? <Link className="text-verdeFloresta cursor-pointer" href="/register">Cadastre-se</Link>
        </span>
      </div>
    </div>
  )
}