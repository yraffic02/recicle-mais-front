"use client"
import PrivateRoute from "@/components/PrivateRoute";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import "@/style/tailwind.css";
import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import { usePathname } from "next/navigation";

const WorkSans = Work_Sans({
  subsets: ['latin'],
  weight: ["400", "600", "500"],
  variable: '--font-WorkSans',
});

/* export const metadata: Metadata = {
  title: "Recicle Mais",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname!);

  return (
    <html lang="pt-BR">
      <body className={`${WorkSans.variable}`}>
          {children}
      </body>
    </html>
  );
}

/* 
  {isPublicPage && (
        <>          
          {children}
        </>
      )}

{/*       {!isPublicPage && (
        <>          
          <PrivateRoute>{children}</PrivateRoute>
        </>
      )} *

*/