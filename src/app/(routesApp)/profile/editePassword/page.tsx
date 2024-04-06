import { Buttonsm } from "@/app/opening/components/buttonsm";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import Image from "next/image";

export default function EditePassword() {
  return (
    <div className="w-full h-screen flex flex-col relative">
      <Header>
          <h1 className="font-medium text-base">Alterar Senha</h1>
          <div></div>
      </Header>
      <div className="w-full flex flex-col items-start pt-12 media-md-h">
        <Image 
          src="/logo/logo.svg" 
          alt="logo" 
          width={115} 
          height={24} 
          className="mb-8"
        />
  
        <div className="w-full flex items-start flex-col gap-4 mb-12">
          <h1 className="text-black text-title font-title leading-8">
            Alterar minha senha
          </h1>
          <p className="text-body font-body leading-8 text-black">
            Para alterar sua senha, 
            digite sua senha atual, a nova senha e, em seguida, 
            digite a nova senha mais uma vêz para  confirmá-la.
          </p>
        </div>
        <form className="w-full flex flex-col justify-center  mb-24 gap-3">
          <Label labelHtmlFor="passwordCurrent">Senha atual</Label>
          <Input id="passwordCurrent"  placeholder="Digite sua senha atual"/>

          <Label labelHtmlFor="newPassword">Nova Senha</Label>
          <Input id="newPassword" placeholder="Digite a nova senha"/>

          <Label labelHtmlFor="confirmPassword">Confirme a nova senha</Label>
          <Input id="confirmPassword" placeholder="Repetir a nova senha"/>
        </form>
        <div className="w-full  flex justify-center items-center gap-6 absolute bottom-0">
          <Button typeButton="secondary">
              Cancelar
          </Button>
          <Button typeButton="primary">
              Confirmar
          </Button>
        </div>
      </div>
    </div>
  )
}