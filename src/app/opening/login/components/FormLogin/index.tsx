import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const FormLogin = () => {
    const [dataForm, setDataForm] = useState();
    

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/user", dataForm);
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={() => handleSubmit()}
      className="w-full flex flex-col justify-center gap-3 form-mb"
    >
      <Label labelHtmlFor="email">Email</Label>
      <Input id="email" placeholder="Digite aqui o seu Email" />

      <Label labelHtmlFor="password">Senha</Label>
      <Input id="password" placeholder="Digite sua senha" />

      <div className="w-full flex justify-end items-end">
        <Link href="#" className="text-body font-body text-verdeFloresta">
          Esqueci minha senha
        </Link>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-6 absolute bottom-0">
        <Button typeButton="primary">
          <p className="font-medium">Entrar</p>
        </Button>
        <span className="text-body font-body font-workSans leading-6 text-black">
          Não tem conta ?{" "}
          <Link className="text-verdeFloresta cursor-pointer" href="/register">
            Cadastre-se
          </Link>
        </span>
      </div>
    </form>
  );
};
