import { Footer } from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-6 flex flex-col items-center h-screen">
        {children}
        <Footer />
    </div>
  );
}
