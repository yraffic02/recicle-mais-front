import { Avatar } from "@/components/Avatar";
import { Header } from "@/components/Header/index";
import Image from "next/image";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Label } from "@/components/Label";

export default function RegisterScheduling() {
  return (
    <div className="h-screen flex flex-col justify-between w-full">
      <div className="h-full">
        <Header>
          <h1 className="text-base font-medium">Cadastro</h1>
          <Avatar />
        </Header>
        <main>
          <h2 className="font-semibold text-cinzaEscuro mt-6 mb-6">
            Continue seu cadastro para que possamos te conectar com os nossos
            catadores!
          </h2>
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
              {" "}
              <Image
                className="w-full"
                src="/icons/check2gray.svg"
                alt="Next.js"
                width={164}
                height={34}
              />
            </div>
          </div>
          <form className="flex flex-col items-start gap-3 mb-3 pb-20">
            <Label labelHtmlFor="name">Nome Completo</Label>
            <Input
              placeholder="Digite seu nome completo"
              name="estado"
              value={""}
            />
            <Label labelHtmlFor="text">Número de Celular</Label>
            <Input placeholder="ex: (99) 98989-9898" name="estado" value={""} />
          </form>
        </main>
      </div>
      <Button typeButton="quinary">Continuar</Button>
    </div>
  );
}
