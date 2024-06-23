"use client";
import React, { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";

export default function Home() {
  const [eventsToShow, setEventsToShow] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    const { events } = await response.json();
    const today = new Date();
    const upcomingEvents = events
      // @ts-expect-error
      .filter((event) => parseDate(event.startDate) >= today)
      // @ts-expect-error
      .sort((a, b) => parseDate(a.startDate) - parseDate(b.startDate));
    setEventsToShow(upcomingEvents);
    setRegisteredEvents(events.length);
  };

  useEffect(() => {
    fetchData().then(() => setLoading(false));
  }, []);

  function parseDate(dateString: string) {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6); // You can adjust this value

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = eventsToShow.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(eventsToShow.length / itemsPerPage);

  // TypeScript 😡😡😡😡

  if (loading)
    return (
      <h1 className='text-4xl md:text-7xl font-bold text-center'>
        Cargando...
      </h1>
    );

  return (
    <main className='min-h-screen grid grid-cols-1  w-full place-items-center px-2 md:px-8'>
      <section className='flex flex-col w-full px-2 text-center  my-2 mb-4 place-items-center place-content-center h-full gap-4'>
        <h1 className='text-4xl md:text-7xl font-bold '>Tech Events Argy</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center md:w-1/2'>
          <p>
            Una recopilación, o intento, de todos los eventos tech en Argentina.
            Utiliza el buscador para encontrar eventos por organizador, fecha o
            ciudad.
          </p>
          {loading ? null : (
            <p className='my-2 text-xl flex flex-col border-2 w-fit px-3 py-2 rounded-md shadow-lg'>
              Eventos siendo trackeados hasta el momento{" "}
              <span className='text-4xl font-bold'>{registeredEvents}</span>{" "}
            </p>
          )}
        </div>
        <p className='my-4'>
          Si ves algún error o quieres agregar algun evento, comunícate con{" "}
          <a
            className='underline underline-offset-2 text-orange-500 font-semibold'
            href='https://x.com/messages/150496130-150496130?text=Hola,%20quiero%20agregar%20un%20evento%20a%20Tech%20Events%20Argy.'
          >
            0xKoller.
          </a>
        </p>
      </section>

      <div className='grid md:grid-cols-2 gap-3 m-2'>
        {currentItems.map((event, index) => (
          <CustomCard key={index} data={event} />
        ))}
      </div>
      <div className='w-full flex place-content-center gap-2 mb-4 mt-2'>
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className='shadow-lg border-2 bg-muted hover:bg-muted-foreground transition-all dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Anterior
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(eventsToShow.length / itemsPerPage)
            }
            className='shadow-lg border-2 bg-muted hover:bg-muted-foreground transition-all dark:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Siguiente
          </button>
        )}
      </div>
    </main>
  );
}
