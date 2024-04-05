'use client';
import { Button } from "@/components/Button";
import { useStep } from "@/hooks/useHookStep";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Bullet from "./components/Bullet/bullet";
import { LayoutStep } from "./components/LayoutStep";



export default function LandingPage() {
const router = useRouter();
const {curretStep, handleToAddCurretStep} = useStep({number: 2})

const handleNextStep = () =>{
  handleToAddCurretStep()

  if(curretStep === 2){
    router.push('/opening/login')
  }
}

return (
  <div className="h-full flex flex-col justify-between items-center gap-6">
    {
      curretStep === 0 ?
      <LayoutStep>
        <Image
          src="/illustrations/illustration1.svg"
          alt="ilustração"
          width={327}
          height={200}
        />
        <div className="flex flex-col gap-4">
          <strong className="text-title font-title font-workSans text-left w-full leading-8">Olá, tudo bem?</strong>
          <span className="text-body font-workSans font-legenda leading-6 text-gray-700">
            Comece agora sua jornada de reciclagem e venha fazer a diferença no mundo conosco!
          </span>
        </div>
        <div className="w-full flex justify-center items-center gap-6">
          <Bullet color />
          <Bullet />
          <Bullet />
        </div>
      </LayoutStep>
      : null
    }
    
   {
      curretStep === 1 ?
      <LayoutStep>
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
        <div className="w-full flex justify-center items-center gap-6">
          <Bullet/>
          <Bullet color />
          <Bullet />
        </div>

      </LayoutStep>
      : null
    }

    {
      curretStep === 2 ?
      <LayoutStep>
        <Image
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
        <div className="w-full flex justify-center items-center gap-6">
          <Bullet />
          <Bullet />
          <Bullet color />
        </div>

      </LayoutStep>
      : null
    }

    <div className="flex justify-between items-center w-full gap-16">
      <Link
        href='#'
        className="text-body font-workSans font-bold leading-6 text-cinzaEscuro"
      >
        Visitante
      </Link>
        
      <Button 
        typeButton="primary"
        onClick={handleNextStep}
      >
          Começar
      </Button>
    </div >
  </div>
)
}

