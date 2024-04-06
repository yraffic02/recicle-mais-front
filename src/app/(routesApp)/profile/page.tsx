import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { SecondaryHeaderButton } from "@/components/Header/components/ButtonActionSecondary";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Link from "next/link";
import { HeaderProfile } from "../menu/components/HeaderProfile";

export default function EditePage() {
  return (
    <div className="w-full h-full flex flex-col relative">
      <Header>
          <h1 className="font-medium text-base">Minha Conta</h1>
          <SecondaryHeaderButton 
              srcIcon="/icons/notification.svg"
          />
      </Header>
      <div className="w-full pb-6 pt-4">
          <HeaderProfile />
      </div>
      <div
        className="w-full h-full flex flex-col pt-7 media-md-h"
      >
        <form className="w-full flex justify-center  gap-3 flex-col mb-32">
          <Label labelHtmlFor="name">Nome</Label>
          <Input id="name" />

          <Label labelHtmlFor="email">E-mail</Label>
          <Input id="email" />

          <Label labelHtmlFor="telefone">Número de celular</Label>
          <Input id="telefone" />

          <Label labelHtmlFor="address">Endereço</Label>
          <Input id="address" />

          <Label labelHtmlFor="password">Senha</Label>
          <Input id="password" />

          <div className="w-full absolute bottom-0 bg-white">
            <div className="w-full flex justify-center items-center gap-1 mb-10">
              <span className="font-workSans font-title text-body">
                Deseja alterar sua senha?
              </span>
              <Link 
                href="/profile/editePassword" 
                className="font-title text-body text-verdeFloresta underline"
              >
                Clique aqui!
              </Link>
            </div>
            <Button typeButton="primary">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}