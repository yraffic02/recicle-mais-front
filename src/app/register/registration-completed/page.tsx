"use client"
import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

export default function PageCompleted() {
  const router = useRouter();

  const handleClickGo = () => {
    router.push("/opening/login")
  }

  return (
    <main
      className="flex flex-col justify-between items-center m11 h-full relative"
      style={{ height: "calc(100vh - 5.5rem)" }}
    >
      <h1 className="text-xl font-semibold">Parabéns!!</h1>
      <Avatar typeAvatar="lg" />
      <h1 className="text-xl font-semibold">
        Sua conta foi criada com sucesso!
      </h1>
        <Button typeButton="primary" onClick={handleClickGo}>Vamos lá!</Button>
    </main>
  );
}
