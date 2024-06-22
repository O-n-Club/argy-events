import Header from "@/components/Header";
import { Providers } from "./providers";
import { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Argy Tech Events",
  description: "Una recopilación de eventos tech en Argentina.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className='flex flex-col place-items-center'>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
