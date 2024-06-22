import { Plus } from "lucide-react";
import TableProp from "../components/TableProp";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/events");
  const { events } = await response.json();
  return (
    <main className='min-h-screen grid grid-cols-1  w-full place-items-center px-2 md:px-8'>
      <section className='flex flex-col w-full px-2 md:w-1/2  my-2 mb-4 place-items-center place-content-center h-full gap-4'>
        <h1 className='text-7xl font-bold text-center'>Tech Events Argy</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 mt-2 mx-2'>
          <p>
            Una recopilación, o intento, de todos los eventos tech en Argentina.
            Utiliza el buscador para encontrar eventos por organizador, fecha o
            ciudad.
          </p>
          <ul className='list-disc'>
            <li>Haz clic en el nombre del evento para acceder al registro.</li>
            <li>
              Si ves algún error, comunícate con{" "}
              <a
                className='underline underline-offset-2 text-orange-500 font-semibold'
                href='https://twitter.com/0xKoller'
              >
                0xKoller
              </a>
            </li>
          </ul>
        </div>
      </section>

      <TableProp data={events} />

      <Link
        className='
  fixed bottom-5 right-5
  bg-slate-500 w-16 h-16
  rounded-full flex items-center
  justify-center text-white
  hover:bg-slate-600 transition-all duration-300 ease-in-out
  font-bold text-3xl
  opacity-50 hover:opacity-100
  '
        href='https://forms.gle/eJs2drRFpvBZVrcu5'
      >
        <Plus size={24} />
      </Link>
    </main>
  );
}
