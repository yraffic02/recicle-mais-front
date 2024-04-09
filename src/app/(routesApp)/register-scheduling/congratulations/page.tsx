"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Congratulations() {
  const router = useRouter();

  const handleClickGoTo = () => {
    router.push("/how-to-recycle/collect-point/adress");
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div></div>
      <div className="flex flex-col items-center">
        <Image
          className="w-full"
          src="/illustrations/illustration10.svg"
          alt="Next.js"
          width={164}
          height={34}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold text-center mb-4">Parabéns!!</h1>
        <h1 className="text-lg font-bold w-40 text-center">
          Seu cadastro foi completado com sucesso!
        </h1>
      </div>
      <div>
        <Button typeButton="primary" onClick={handleClickGoTo}>
          Vamos lá!
        </Button>
      </div>
    </div>
  );
}
