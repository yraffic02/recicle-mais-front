import { Buttonsm } from "@/app/opening/components/buttonsm";
import { Header } from "@/components/Header";
import { SecondaryHeaderButton } from "@/components/Header/components/ButtonActionSecondary";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Image from "next/image";
import Link from "next/link";
import { HeaderProfile } from "../profile/components/HeaderProfile";
import { Button } from "@/components/Button";

export default function EditePage() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header>
          <h1 className="font-medium text-base">Minha Conta</h1>
          <SecondaryHeaderButton 
              srcIcon="/icons/notification.svg"
          />
      </Header>
      <div className="w-full pb-6">
          <HeaderProfile />
      </div>
      <div
        className="w-full h-full flex flex-col pt-7 media-md-h"
      >
        <form className="w-full flex justify-center  gap-3 flex-col mb-6">
          <Label labelHtmlFor="email">Email</Label>
          <Input id="email" placeholder="Digite aqui o seu Email" />

          <Label labelHtmlFor="password">Senha</Label>
          <Input id="password" placeholder="Digite sua senha" />

          <Label labelHtmlFor="password">Senha</Label>
          <Input id="password" placeholder="Digite sua senha" />

          <Label labelHtmlFor="password">Senha</Label>
          <Input id="password" placeholder="Digite sua senha" />

          <Label labelHtmlFor="password">Senha</Label>
          <Input id="password" placeholder="Digite sua senha" />
          <div className="w-full flex justify-center items-center gap-1 mb-10">
            <span className="font-workSans font-title text-body">
              Deseja alterar sua senha?
            </span>
            <Link 
              href="/edite/editePassword" 
              className="font-title text-body text-verdeFloresta underline"
            >
              Clique aqui!
            </Link>
          </div>
          <Button typeButton="primary">
            Salvar
          </Button>
        </form>
      </div>
    </div>
  )
}