import { UserProvider } from "@/store/context/contextUser";
import "@/style/tailwind.css";
import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';

const WorkSans = Work_Sans({
  subsets: ['latin'],
  weight: ["400", "600", "500"],
  variable: '--font-WorkSans',
});

export const metadata: Metadata = {
  title: "Recicle Mais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <UserProvider>
          <div className={`${WorkSans.variable} p-6`}>
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
