"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Congratulations() {
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
        <Link href="/how-to-recycle/collect-point/adress">
          <Button typeButton="primary">Vamos lá!</Button>
        </Link>
      </div>
    </div>
  );
}
