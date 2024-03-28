import { Header } from "@/components/Header/index";
import { Avatar } from "@/components/Avatar";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function HowToRecycle() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between w-full">
        <Header>
          <h1 className="text-base font-medium">Reciclar</h1>
          <Avatar />
        </Header>
        <main>
          <h1 className="font-workSans font-title text-xl leading-6 mb-[9vh] ">
            Como reciclar?
          </h1>
          <div className="flex justify-center">
            <Image
              src="/illustrations/illustration8.svg"
              height={320}
              width={283}
              alt="como reciclar"
            />
          </div>
        </main>
        <div className="flex flex-col justify-between gap-3">
          <Button typeButton="tertiary">Através de catadores</Button>
          <Button typeButton="tertiary" className="mt-4">
            Através de Pontos de Coleta
          </Button>
        </div>
      </div>
    </>
  );
}
