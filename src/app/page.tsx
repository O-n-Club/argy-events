import TableProp from "../components/TableProp";

export default async function Home() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/events");
  const { events } = await response.json();

  function parseDate(dateString: string) {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }
  const today = new Date();

  const upcomingEvents = events
    // @ts-expect-error
    .filter((event) => parseDate(event.date) >= today)
    // @ts-expect-error
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  // TypeScript 😡😡😡😡
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
              Si ves algún error o quieres agregar algun evento, comunícate con{" "}
              <a
                className='underline underline-offset-2 text-orange-500 font-semibold'
                href='https://x.com/messages/150496130-150496130?text=Hola,%20quiero%20agregar%20un%20evento%20a%20Tech%20Events%20Argy.'
              >
                0xKoller.
              </a>
            </li>
          </ul>
        </div>
      </section>

      <TableProp data={upcomingEvents} />
    </main>
  );
}
