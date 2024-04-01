"use client";
import Image from "next/image";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function ModalStars() {
  return (
    <div className="flex flex-col items-center justify-end absolute bg-cinzaBackGround h-[70%] w-[100vw] rounded-t-[32px] pb-[20px] bottom-[-100px]">
      <div className="flex flex-col h-full justify-center">
        <h1 className="font-medium mb-4">Foi fácil chegar?</h1>
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
      </div>
      <div className="w-full pl-[24px] pr-[24px] mb-4">
        <Link href="/home">
          <Button typeButton="primary">Início</Button>
        </Link>
      </div>
    </div>
  );
}
