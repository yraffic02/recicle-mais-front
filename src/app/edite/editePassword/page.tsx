import { Buttonsm } from "@/app/opening/components/buttonsm";
import Image from "next/image";
import Header from "../components/header";
import { InputEdite } from "../components/inputEdite";

export default function EditePassword() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center p-6">
      <Header title="Alterar Senha" />
      <div className="w-full flex flex-col justify-start items-center ">
        <div className="w-full flex justify-start items-center mt-12 mb-8">
          <Image src="/logo/logo.svg" alt="logo" width={115} height={24} />
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-full flex justify-start items-center mb-4" >
            <h1 className="font-workSans text-black text-title font-title leading-8 ">Alterar minha senha</h1>
          </div>
          <div className="flex justify-start items-center mb-12 ">
            <span className="font-workSans text-body font-body leading-8 text-black">
              Para alterar sua senha, digite sua senha atual, a nova senha e, em seguida, digite a nova senha mais uma vêz para  confirmá-la.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mb-24 gap-3">
          <InputEdite label="Senha atual" type="password" placeholder="Digite sua senha Atual" name="senhaAtual" />
          <InputEdite label="Nova Senha" type="password" placeholder="Digite sua senha Atual" name="novaSenha" />
          <InputEdite label="Confirme a nova senha" type="password" placeholder="Digite sua senha Atual" name="confirmeSenha" />
        </div>
        <div className="w-full  flex justify-center items-center gap-6">
          <Buttonsm size={36} color="cinzaClaroSec">
            <Buttonsm.Text color="cinzaClaro">Cancelar</Buttonsm.Text>
          </Buttonsm>
          <Buttonsm size={36} color="verdeFloresta">
            <Buttonsm.Text color="white">Confirmar</Buttonsm.Text>
          </Buttonsm>

        </div>
      </div>
    </div>
  )
}