"use client";
import { Footer } from "@/components/Footer";
import PrivateRoute from "@/components/PrivateRoute";
import { checkIsPublicRoute } from "@/functions/check-is-public-route";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname!);

  return (
    <div className="p-6 flex flex-col items-center h-screen overflow-hidden">
      {isPublicPage && (
        <>
          <p>ROTA PUBLICA</p>
          {children}
        </>
      )}

      {!isPublicPage && (
        <>
          <p>ROTA PRIVADA</p>
          <PrivateRoute>{children}</PrivateRoute>
        </>
      )}

      {children}
      <Footer />
    </div>
  );
}
