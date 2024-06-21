import TableProp from "../components/TableProp";
import Link from "next/link";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/events");
  const { events } = await response.json();
  return (
    <main className='min-h-screen flex flex-col place-content-center w-full place-items-center px-2 md:px-8'>
      <section className='text-center my-2'>
        <h1 className='text-2xl font-bold'>Tech Events Argy</h1>
        <p>A list of tech events happening in Argentina.</p>
      </section>

      <TableProp data={events} />

      <section className='my-2 flex flex-col w-full place-items-center text-center'>
        <h2 className='text-lg font-semibold'>No encuentras un evento?</h2>
        <p>
          Si no encuentras un evento en la lista, puedes solicitar para que sea
          agregado.
        </p>
        <Link className='bg-slate-500 px-3 py-1 m-1 rounded-lg' href='#'>
          Agregar evento
        </Link>
      </section>
    </main>
  );
}
