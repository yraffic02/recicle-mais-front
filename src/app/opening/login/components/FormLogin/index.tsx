"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import api from "@/server/api";
import { setItem } from "@/utils/localStorageUtils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IFormLoginProps {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const router = useRouter();
  const [formLogin, setFormLogin] = useState<IFormLoginProps>({
    email: "",
    password: "",
  });

  function handleChangeForm(event: React.ChangeEvent<HTMLInputElement>) {
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value });
  }


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const repsonse = await api.post('/login', {
        email: formLogin.email,
        password: formLogin.password
      }
      )
      setItem('token', repsonse.data.token)
      router.push('/home')
      console.log(repsonse.data.token)
    } catch (error) {
      console.log(error)

    }
  }

  return (
    <form className="w-full flex flex-col justify-center gap-3 form-mb" onSubmit={handleSubmit}>

      <Label labelHtmlFor="email">Email</Label>
      <Input
        id="email"
        placeholder="Digite aqui o seu Email"
        name="email"
        value={formLogin.email}
        onChange={(e) => handleChangeForm(e)}
      />

      <Label labelHtmlFor="password">Senha</Label>
      <Input
        id="password"
        type="password"
        name="password"
        value={formLogin.password}
        onChange={(e) => handleChangeForm(e)}
        placeholder="Digite sua senha"
      />

      <div className="w-full flex justify-end items-end">
        <Link href='#' className="text-body font-body text-verdeFloresta">
          Esqueci minha senha
        </Link>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-6 absolute bottom-0">
        <Button typeButton="primary">
          <p className="font-medium">Entrar</p>
        </Button>
        <span className="text-body font-body font-workSans leading-6 text-black">
          Não tem conta ? <Link className="text-verdeFloresta cursor-pointer" href="/register">Cadastre-se</Link>
        </span>
      </div>

    </form>
  )
}