import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Libre_Franklin } from "next/font/google";
import { Providers } from "./providers";
import { Metadata } from "next";
import "./styles/globals.css";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Argy Tech Events",
  description: "Una recopilación de eventos tech en Argentina.",
};

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={
          libre_franklin.variable + " flex flex-col place-items-center"
        }
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
