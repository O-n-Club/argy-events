import TableProp from "../components/TableProp";

export default async function Home() {
  // const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/events");
  // const { events } = await response.json();

  const events = [
    {
      date: "27/6/2024",
      title: "AWS Generative AI Roadshow Argentina",
      description:
        "Participe en AWS LATAM Generative AI Roadshow Argentina el 27 de junio de 2024. ¡Regístrese ahora y transforme su negocio!",
      city: "Ciudad Autónoma de Buenos Aires",
      time: "08:00",
      organize: "AWS",
      link: "https://aws-genai-ar.splashthat.com/?mkt_tok=MTEyLVRaTS03NjYAAAGTII8ZUKkgXRRyDa7QvB0GtGN1wj6UGAICtYxZBj5obdtbpLrKQH2IbbSCZtChjA2qeGMSu4Y6OhCM2DR4hvqrDM8VKeR58j9PinOA0Kj8l4YepGNtVYl4Ow",
    },
    {
      date: "8/8/2024",
      title: "VII FÓRUM NACIONAL de TECNOLOGÍA",
      description:
        "l Fórum Nacional de TIC’s 2024 aspira a ser el mayor punto de encuentro público-privado del país, conectando líderes de TIC en torno a temas de relevancia nacional, regional y global, con exposiciones, reuniones e informes clave.",
      city: "Ciudad Autónoma de Buenos Aires",
      time: "08:00",
      organize: "LIDE",
      link: "https://lideargentina.com/eventos/vii-forum-nacional-de-tecnologia",
    },
    {
      date: "12/8/2024",
      title: "50ª Conferencia Latinoamericana de Informática (L CLEI 2024)",
      description:
        "CLEI invita a presentar trabajos teóricos o prácticos sobre avances o aplicaciones en sus simposios. CLEI L será en Bahía Blanca, Argentina, del 12 al 16 de agosto de 2024, con 5 tracks, 6 eventos asociados y 2 paralelos.",
      city: "Bahía Blanca",
      time: "08:00",
      organize: "Centro Latinoamericano de Estudios de Informática",
      link: "https://conferencia2024.clei.org/",
    },
    {
      date: "13/8/2024",
      title: "50ª Conferencia Latinoamericana de Informática (L CLEI 2024)",
      description:
        "CLEI invita a presentar trabajos teóricos o prácticos sobre avances o aplicaciones en sus simposios. CLEI L será en Bahía Blanca, Argentina, del 12 al 16 de agosto de 2024, con 5 tracks, 6 eventos asociados y 2 paralelos.",
      city: "Bahía Blanca",
      time: "08:00",
      organize: "Centro Latinoamericano de Estudios de Informática",
      link: "https://conferencia2024.clei.org/",
    },
    {
      date: "14/8/2024",
      title: "50ª Conferencia Latinoamericana de Informática (L CLEI 2024)",
      description:
        "CLEI invita a presentar trabajos teóricos o prácticos sobre avances o aplicaciones en sus simposios. CLEI L será en Bahía Blanca, Argentina, del 12 al 16 de agosto de 2024, con 5 tracks, 6 eventos asociados y 2 paralelos.",
      city: "Bahía Blanca",
      time: "08:00",
      organize: "Centro Latinoamericano de Estudios de Informática",
      link: "https://conferencia2024.clei.org/",
    },
    {
      date: "15/8/2024",
      title: "50ª Conferencia Latinoamericana de Informática (L CLEI 2024)",
      description:
        "CLEI invita a presentar trabajos teóricos o prácticos sobre avances o aplicaciones en sus simposios. CLEI L será en Bahía Blanca, Argentina, del 12 al 16 de agosto de 2024, con 5 tracks, 6 eventos asociados y 2 paralelos.",
      city: "Bahía Blanca",
      time: "08:00",
      organize: "Centro Latinoamericano de Estudios de Informática",
      link: "https://conferencia2024.clei.org/",
    },
    {
      date: "16/8/2024",
      title: "50ª Conferencia Latinoamericana de Informática (L CLEI 2024)",
      description:
        "CLEI invita a presentar trabajos teóricos o prácticos sobre avances o aplicaciones en sus simposios. CLEI L será en Bahía Blanca, Argentina, del 12 al 16 de agosto de 2024, con 5 tracks, 6 eventos asociados y 2 paralelos.",
      city: "Bahía Blanca",
      time: "08:00",
      organize: "Centro Latinoamericano de Estudios de Informática",
      link: "https://conferencia2024.clei.org/",
    },
    {
      date: "17/10/2024",
      title: "Pulso IT",
      description:
        "Pulso IT ofrece acceso a productos, tecnologías, y contactos clave del mercado IT, además de oportunidades para ampliar tu red profesional, adquirir conocimientos y estar al tanto de las últimas novedades tecnológicas.",
      city: "Ciudad Autónoma de Buenos Aires",
      time: "08:00",
      organize: "CADMIPyA",
      link: "https://pulsoit.com.ar/register/",
    },
    {
      date: "18/10/2024",
      title: "Pulso IT",
      description:
        "Pulso IT ofrece acceso a productos, tecnologías, y contactos clave del mercado IT, además de oportunidades para ampliar tu red profesional, adquirir conocimientos y estar al tanto de las últimas novedades tecnológicas.",
      city: "Ciudad Autónoma de Buenos Aires",
      time: "08:00",
      organize: "CADMIPyA",
      link: "https://pulsoit.com.ar/register/",
    },
  ];
  function parseDate(dateString: string) {
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  }
  const today = new Date();

  const upcomingEvents = events

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
