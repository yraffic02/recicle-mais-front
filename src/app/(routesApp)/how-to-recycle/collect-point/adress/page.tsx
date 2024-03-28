"use client";
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header/index";
import { Input } from "@/components/Input/index";
import { Label } from "@/components/Label";
import { ChangeEvent, useState } from "react";

export default function Adress() {
  const [formValues, setFormValues] = useState({
    cep: "",
    endereco: "",
    municipio: "",
    estado: "",
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Formulário enviado:", formValues);
  };
  
console.log(formValues, "FORM")
  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar />
        </Header>
        <main style={{ height: "calc(100vh - 200px" }}>
          <h1 className="font-workSans font-title text-xl leading-6 mt-2 mb-7">
            Digite seu endereço
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-4"
          >
            <Label labelHtmlFor="text">CEP</Label>
            <Input
              placeholder="Digite aqui seu CEP"
              onChange={handleChangeInput}
              name="cep"
              value={formValues.cep}
            />
            <Label labelHtmlFor="text">Endereço</Label>
            <Input
              placeholder="Digite aqui o seu endereço"
              onChange={handleChangeInput}
              name="endereco"
              value={formValues.endereco}
            />
            <Label labelHtmlFor="text">Município</Label>
            <Input
              placeholder="Digite aqui o nome da sua cidade"
              onChange={handleChangeInput}
              name="municipio"
              value={formValues.municipio}
            />
            <Label labelHtmlFor="text">Estado</Label>
            <Input
              placeholder="Digite aqui o Estado onde mora"
              onChange={handleChangeInput}
              name="estado"
              value={formValues.estado}
            />
          </form>
        </main>
        <div className="flex flex-col justify-between">
          <Button typeButton="quinary">Continuar</Button>
        </div>
      </div>
    </>
  );
}
