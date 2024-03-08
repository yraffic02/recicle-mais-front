'use client';
import Bullet from "@/components/bullet";
import { Buttonsm } from "@/components/buttonsm";
import { LinkButton } from "@/components/linkButton";
import { IUserContext, useMenuContext } from "@/store/context/contextUser";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function LandingPage() {
  const router = useRouter();
  const { currentPage, setCurrentPage } = useMenuContext() as IUserContext;
  console.log(currentPage)

  function handelPage(page: string) {
    if (page === 'page1') {
      setCurrentPage('page2')
    }

    if (page === 'page2') {
      setCurrentPage('page3')

    }
    if (page === 'page3') {
      router.push('/opening/login')
    }
  }
  return (
    <div className="flex h-screen justify-start items-center flex-col gap-6 p-6">
      {currentPage === 'page1' ?
        <div className="w-full my-[6.5rem]">
          <Image
            className="mb-20"
            src="/illustrations/illustration1.svg"
            alt="ilustração"
            width={327}
            height={200}
          />
          <div className="w-5/6 flex flex-col gap-4 justify-center items-center">
            <strong className="text-title font-title font-workSans text-left w-full leading-8">Olá, tudo bem?</strong>
            <span className="text-body font-workSans font-legenda leading-6 text-gray-700">
              Comece agora sua jornada de reciclagem e venha fazer a diferença no mundo conosco!
            </span>
          </div>
          <div className="w-full flex justify-center items-center mt-16 gap-6">
            <Bullet color={true} />
            <Bullet color={false} />
            <Bullet color={false} />
          </div>

        </div>
        : null
      }
      {
        currentPage === 'page2' ?
          <div className="w-full my-[6.5rem] ">
            <Image
              className="mb-8"
              src={'/illustrations/illustration2.svg'}
              alt={'ilustração'}
              width={327}
              height={224}
            />

            <div className="w-full flex flex-col gap-4 justify-center items-center">
              <strong className="text-title font-title font-workSans text-left w-full leading-8">A revolução verde</strong>
              <span className="text-body font-workSans font-legenda leading-6 text-gray-700 w-full">
                Nosso objetivo é conectar você com catadores que vão até sua casa, informar pontos de coleta na rua e dar informações sobre reciclagem.
              </span>
            </div>
            <div className="w-full flex justify-center items-center mt-16 gap-6">
              <Bullet color={false} />
              <Bullet color={true} />
              <Bullet color={false} />
            </div>

          </div>
          : null
      }
      {
        currentPage === 'page3' ?
          <div className="w-full my-[6.5rem]">
            <Image
              className="mb-5"
              src={'/illustrations/illustration3.svg'}
              alt={'ilustração'}
              width={327}
              height={237}
            />

            <div className="w-full flex flex-col gap-4 justify-center items-center">
              <strong className="text-title font-title font-workSans text-left w-full leading-8">Vamos lá!</strong>
              <div className="w-full flex justify-center items-center flex-col">
                <ul className="w-full text-body font-body font-workSans leading-6 text-cinzaEscuro" >
                  <li>1. Separe seu resíduo</li>
                  <li>2. Dê um destino adequado</li>
                  <li>3. Receba dicas de reciclagem </li>
                  <li>4. Acompanhe seu impacto ambiental</li>
                </ul>

              </div>

            </div>
            <div className="w-full flex justify-center items-center mt-16 gap-6">
              <Bullet color={false} />
              <Bullet color={false} />
              <Bullet color={true} />
            </div>

          </div>
          : null
      }
      <div className="flex justify-center items-center w-full">
        <LinkButton>
          <LinkButton.Text>
            Visitante
          </LinkButton.Text>
        </LinkButton>
        <Buttonsm size={36} onClick={() => handelPage(currentPage)}>
          <Buttonsm.Text>
            Começar
          </Buttonsm.Text>
        </Buttonsm>
      </div >
    </div>
  )
}