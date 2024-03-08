import { Header } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastro",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-6">
        <Header>
                <h1
                    className="font-medium"
                >
                    Cadastro
                </h1>
                <div></div>
        </Header>
        <div>
            {children}  
        </div>
    </div>
  );
}
