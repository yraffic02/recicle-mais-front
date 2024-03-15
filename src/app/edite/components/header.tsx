"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const router = useRouter();
  return (
    <div className="w-full h-12 flex justify-between items-center ">
      <div>
        <Image src="/icons/arrowLeft.svg" alt="logo" width={12} height={12} onClick={() => router.back()} />
      </div>
      <div>
        <h1 className="font-workSans text-title font-title leading-normal">
          {title}
        </h1>
      </div>
      <div>
        <Image src="/icons/notification.svg" alt="logo" width={30} height={30} />
      </div>
    </div>
  )
}