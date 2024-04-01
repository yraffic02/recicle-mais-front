"use client";
import Image from "next/image";
import { Button } from "@/components/Button";

export default function ModalStars() {
  return (
    <div className="flex flex-col items-center justify-end absolute bg-cinzaBackGround h-[50%] w-[100vw] rounded-[32px] pb-[20px] bottom-[-80px]">
      <h1>Foi fácil chegar?</h1>
      <div className="flex">
        <Image
          src="/icons/iconStar.svg"
          alt="Stars"
          height={0}
          width={0}
          className="h-[30px] w-[30px]"
        />
        <Image
          src="/icons/iconStar.svg"
          alt="Stars"
          height={0}
          width={0}
          className="h-[30px] w-[30px]"
        />
        <Image
          src="/icons/iconStar.svg"
          alt="Stars"
          height={0}
          width={0}
          className="h-[30px] w-[30px]"
        />
        <Image
          src="/icons/iconStar.svg"
          alt="Stars"
          height={0}
          width={0}
          className="h-[30px] w-[30px]"
        />
      </div>
      <Button typeButton="quinary">Início</Button>
    </div>
  );
}
