import { ButtonLogin } from "@/components/buttonlogin";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex h-screen justify-start items-center flex-col gap-6 ">
      <div className="w-full h-full flex flex-col justify-center items-center ">
        <Image
          className="mb-9"
          src={'/logo/logo.svg'}
          alt={'logo'}
          width={115}
          height={24}
        />
        <div className="w-full flex justify-center items-center text-center mb-8">
          <h1 className="text-title font-workSans font-title leading-7">
            Quase lá...<br />
            É hora de login!
          </h1>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-3 mb-8">
          <ButtonLogin>
            <ButtonLogin.Icon>
              <Image
                src={'/icons/icone_google.svg'}
                alt={'google'}
                width={24}
                height={24}
              />
            </ButtonLogin.Icon>
            <ButtonLogin.Text>
              Entrar com Google
            </ButtonLogin.Text>
          </ButtonLogin>
          <ButtonLogin>
            <ButtonLogin.Icon>
              <Image
                src={'/icons/icone_facebook.svg'}
                alt={'google'}
                width={24}
                height={24}
              />
            </ButtonLogin.Icon>
            <ButtonLogin.Text>
              Entrar com Google
            </ButtonLogin.Text>
          </ButtonLogin>
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-blue-600  gap-2">
          <strong className="bg-orange-400 w-full h-6">1</strong>
          <strong className="bg-green-500 w-full h-12 rounded-3xl">1</strong>
          <strong className="bg-pink-500 w-full h-6">1</strong>
          <strong className="bg-teal-300 w-full h-12 rounded-3xl">1</strong>
        </div>
      </div>

      <div className="w-full h-28 flex justify-center items-center bg-purple-600">
        footer
      </div>
    </div>
  )
}