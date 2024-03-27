import { Buttonsm } from "@/app/opening/components/buttonsm";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import { InputEdite } from "./components/inputEdite";

export default function EditePage() {
  return (
    <div className="w-full h-screen p-6 flex flex-col justify-center items-center">
      <Header title="Minha Conta" />
      <div
        className="w-full h-full flex justify-center items-center flex-col "
      >
        <div className="flex justify-center items-center gap-6 w-full  mb-6">
          <div className="w-24 h-24 flex justify-center items-center rounded-full">
            <Image src="/avatar/avatar-profile01.svg" alt="logo" width={100} height={100} />
          </div>
          <div className="w-full flex justify-start items-center ">
            <h1 className="font-workSans font-title text-xl leading-6">
              Amanda Campos
            </h1>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-3 flex-col mb-6">
          <InputEdite
            label="Nome"
            name="nome"
            placeholder="Amanda Campos"
            type="text"
          />
          <InputEdite
            label="E-mail"
            name="email"
            placeholder="amandacampos274@gmail.com"
            type="text"
          />
          <InputEdite
            label="Número de celular"
            name="telefone"
            placeholder="32 923334-55555"
            type="number"
          />
          <InputEdite
            label="Endereço"
            name="endereco"
            placeholder="Rua das Flores, 123"
            type="text"
          />
          <InputEdite
            label="Senha"
            name="password"
            placeholder="*********"
            type="password"
          />
        </div>

        <div className="w-full flex justify-center items-center gap-1 mb-10">
          <span className="font-workSans font-title text-body">Deseja alterar sua senha?</span>
          <Link href={"/edite/editePassword"} ><strong className="font-workSans font-title text-body text-verdeFloresta"> Clique aqui!</strong></Link>
        </div>
        <Buttonsm color="verdeFloresta" size={"full"}>
          <Buttonsm.Text color="white">Salvar</Buttonsm.Text>
        </Buttonsm>

      </div>
    </div>
  )
}