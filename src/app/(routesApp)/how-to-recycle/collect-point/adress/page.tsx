import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { Input } from "@/components/Input/index";
import { Label } from "@/components/Label";

export default function Adress() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar />
        </Header>
        <main style={{ height: "calc(100vh - 200px)" }}>
          <h1 className="font-workSans font-title text-xl leading-6 mb-9">
            Digite seu endereço
          </h1>
          <div className="flex flex-col justify-center gap-4">
            <Label>CEP</Label>
            <Input placeholder="Digite aqui seu CEP" />
            <Label>Endereço</Label>
            <Input placeholder="Digite aqui o seu endereço" />
            <Label>Município</Label>
            <Input placeholder="Digite aqui o nome da sua cidade" />
            <Label>Estado</Label>
            <Input placeholder="Digite aqui o Estado onde mora" />
          </div>
        </main>
        <div className="flex flex-col justify-between">
          <Button typeButton="secondary">Continuar</Button>
        </div>
      </div>
    </>
  );
}
