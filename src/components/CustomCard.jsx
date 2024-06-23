import { CalendarDaysIcon, MapPinIcon } from "lucide-react";

import React from "react";
import { Card, CardContent } from "./ui/card";

function CustomCard({ data }) {
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/").map(Number);
    // Note: Month is 0-indexed, so subtract 1
    return new Date(year, month - 1, day);
  };

  const daysToEvent = Math.floor(
    (parseDate(data.startDate) - new Date()) / (1000 * 60 * 60 * 24)
  );
  return (
    <Card className='group overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl '>
      <CardContent className='h-full grid grid-cols-1 gap-3 grid-rows-6 place-content-around'>
        <div className='flex items-center gap-2 justify-between'>
          <div className='flex flex-col'>
            <h2 className=' font-semibold'>{data.title}</h2>
            <h3 className='text-sm font-light text-muted-foreground'>
              {data.organize}
            </h3>
          </div>
          <div className='rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground'>
            <p>{daysToEvent > 0 ? `En ${daysToEvent} días` : "Hoy"}</p>
          </div>
        </div>
        <p className='text-muted-foreground font-semibold'>
          {data.description}
        </p>
        <div className='flex items-center  text-sm font-medium text-muted-foreground'>
          <CalendarDaysIcon className='h-4 w-4' />
          <p className='m-2'>
            {data.startDate} - {data.endDate}
          </p>
        </div>
        <div className='flex items-center  text-sm font-medium text-muted-foreground'>
          <MapPinIcon className='h-4 w-4' />
          <p className='m-2'>{data.city}</p>
        </div>
        <a
          href={data.link}
          target='_blank'
          rel='noreferrer'
          className='text-primary font-medium hover:underline'
        >
          Más información
        </a>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
