import { Buttonsm } from "@/app/opening/components/buttonsm";
import { Header } from "@/components/Header";
import { SecondaryHeaderButton } from "@/components/Header/components/ButtonActionSecondary";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Image from "next/image";
import Link from "next/link";
import { HeaderProfile } from "../profile/components/HeaderProfile";

export default function EditePage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header>
          <h1 className="font-medium text-base">Minha Conta</h1>
          <SecondaryHeaderButton 
              srcIcon="/icons/notification.svg"
          />
      </Header>
      <div
        className="w-full h-full flex  items-center flex-col pt-7"
      >
        <div className="flex justify-center items-center w-full">
          <HeaderProfile />
        </div>

        <div className="w-full flex justify-center  gap-3 flex-col mb-6">
            <Label labelHtmlFor="email">Email</Label>
            <Input id="email" placeholder="Digite aqui o seu Email" />

            <Label labelHtmlFor="password">Senha</Label>
            <Input id="password" placeholder="Digite sua senha" />
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