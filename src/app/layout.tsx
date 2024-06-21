import Header from "@/components/Header";
import { Providers } from "./providers";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='flex flex-col place-items-center'>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
