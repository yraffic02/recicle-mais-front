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
    <div>
      <div>
        {children}
      </div>
    </div>

  );
}