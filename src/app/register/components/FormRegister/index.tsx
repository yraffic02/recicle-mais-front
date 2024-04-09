'use client'
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { IUserContext, useUserContext } from "@/context/contextUser"
import { useStep } from "@/hooks/useHookStep"
import api from "@/server/api"
import { IUser, schemaRegisterUser } from "@/validation/userShema"
import { yupResolver } from "@hookform/resolvers/yup"
import Image from "next/image"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { AvatarsForm } from "../AvatarsForm"

export const FormRegister = () => {
  const { curretStep, handleToAddCurretStep } = useStep({ number: 1 })
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    resolver: yupResolver(schemaRegisterUser),
  });
  const { avatar } = useUserContext() as IUserContext;


  const onSubmit: SubmitHandler<IUser> = async () => {
    try {
      const response = api.post('/user', {
        fullname: getValues('name'),
        password: getValues('password'),
        email: getValues('email'),
        avatar: avatar,
        phone: "vazio",
        address: "vazio",
        city: "vazio",
        zip_code: "vazio",
        user_type: "Cliente",
        state: "vazio"

      })
      console.log(response)

    } catch (error) {
      console.error(error);
    }
  };

  const handleNextStepForm = () => {
    if (errors.name?.message
      || errors.email?.message
      || errors.password?.message
      || errors.confirmPassword?.message
    ) {
      return
    }
    handleToAddCurretStep()
  }

  return (
    <div className="media-md-h">
      <section className="flex flex-col items-center justify-center gap-4">
        <Image
          src='/logo/logo.svg'
          height={24}
          width={115}
          alt="logo recicle mais"
        />

        {
          curretStep === 1 &&
          <h2 className="font-semibold text-cinzaEscuro">
            Quase lá! Escolha um avatar que melhor
            te representa para continuar seu cadastro
          </h2>
        }

        {
          curretStep === 0 &&
          <h2 className="font-semibold text-cinzaEscuro">
            Faça parte deste movimento,
            e ajude o mundo a se tornar cada vez mais limpo
            e sustentável!
          </h2>
        }

        {
          curretStep === 0 &&
          <>
            <Button
              typeButton="secondary"
            >
              <Image
                src='/icons/iconeGoogle.svg'
                height={24}
                width={24}
                alt="icone Google"
              />
              <p>Cadastrar com Google</p>
            </Button>

            <Button
              typeButton="secondary"
            >
              <Image
                src='/icons/iconeFacebook.svg'
                height={24}
                width={24}
                alt="icone Google"
              />
              <p>Cadastrar com Facebook</p>
            </Button>
          </>
        }
      </section>

      {
        curretStep === 0 &&
        <div className="w-full pt-5">
          <h1 className="font-semibold text-cinzaEscuro text-center">
            Ou
          </h1>
        </div>
      }

      <form onSubmit={handleSubmit(onSubmit)}>
        {
          curretStep === 0 &&
          <section className="flex flex-col items-start gap-2 mb-3 pb-20">

            <Label labelHtmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Digite aqui o seu nome"
              {...register('name')}
            />
            <span className="text-[#A81212] text-xs">{errors.name?.message}</span>
            <Label labelHtmlFor="email">Entrar com outro e-mail</Label>
            <Input
              id="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            <span className="text-[#A81212] text-xs">{errors.email?.message}</span>
            <Label labelHtmlFor="password">Senha</Label>
            <Input
              id="password"
              placeholder="Digite uma senha"
              {...register('password')}
            />
            <span className="text-[#A81212] text-xs">{errors.password?.message}</span>
            <Label labelHtmlFor="confirm">Confirmar senha</Label>
            <Input
              id="confirm"
              placeholder="Digite novamente sua senha"
              {...register('confirmPassword')}
            />
            <span className="text-[#A81212] text-xs">{errors.confirmPassword?.message}</span>
          </section>
        }

        {
          curretStep === 1 &&
          <AvatarsForm />
        }

        {
          curretStep === 1 &&
          <div className="flex flex-col items-center justify-center gap-2  w-full absolute bottom-0">
            <Button
              typeButton="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Criar Conta
            </Button>
            <div className="flex items-center justify-center gap-1">
              <input
                type="checkbox"
                id="terms"
                className="h-5 w-5 rounded"

              />
              <label
                htmlFor="terms"
                className="font-semibold text-sm"
              >
                Aceito os <b className="underline">termos</b> e <b className="underline">políticas de privacidade</b>
              </label>
            </div>
          </div>
        }
      </form>
      {
        curretStep === 0 &&
        <div className="flex flex-col items-center justify-center gap-1 bg-white w-full absolute bottom-0">
          <Button
            typeButton="primary"
            onClick={handleNextStepForm}
          >
            Continuar
          </Button>
          <div className="flex items-center justify-center gap-1">
            <p className="font-semibold">Já possui uma conta?</p>
            <Link
              href='register/registration-completed'
              className="font-semibold text-verdeFloresta  underline hover:underline"
            >
              Entrar
            </Link>
          </div>
        </div>
      }
    </div>
  )
}
