import { LoginProvider } from "@/context/contextLogin";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-6 h-screen">
      {children}
    </div>
  );
}