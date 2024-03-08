"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/opening')
    }, 3000)
  }, [])


  return (
    <div className="flex h-screen justify-center items-center flex-col ">
      <Image
        className="mb-14"
        src="/logo/logo.svg"
        alt="Next.js"
        width={164}
        height={34}
      />
    </div>
  );

}
