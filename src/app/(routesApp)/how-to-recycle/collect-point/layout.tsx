import { CollectProvider } from "@/context/contextCollect";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CollectProvider>{children}</CollectProvider>;
}
