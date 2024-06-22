"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const columns = [
  {
    header: "Fecha",
    accessorKey: "date",
    size: 50,
  },
  {
    header: "Nombre",
    accessorKey: "title",
    size: 100,
  },
  {
    header: "Descripción",
    accessorKey: "description",
    size: 270,
  },
  {
    header: "Ciudad",
    accessorKey: "city",
    size: 50,
  },
  {
    header: "Hora",
    accessorKey: "time",
    size: 50,
  },
  {
    header: "Organiza",
    accessorKey: "organize",
    size: 50,
  },
];

function TableProp({ data }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const amountOfEvents = data.length;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,

    onGlobalFilterChange: setFiltering,
  });
  const size = 18;

  const navigateTo = (link) => {
    return () => {
      window.location.href = link;
    };
  };

  return (
    <section className='w-full'>
      <Input
        type='text'
        value={filtering}
        onChange={(e) => {
          setFiltering(e.target.value);
        }}
        placeholder='Buenos Aires, Empremafia, Squads...'
      ></Input>
      <Table className='my-2'>
        <TableHeader>
          <TableRow>
            {table.getHeaderGroups().map((headerGroup, index) =>
              headerGroup.headers.map((header, index) => (
                <TableHead
                  key={index}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className='flex'>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      {
                        asc: <ArrowUp size={size} />,
                        desc: <ArrowDown size={size} />,
                      }[header.column.getIsSorted() ?? null]
                    }
                  </div>
                </TableHead>
              ))
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row, indexR) => (
            <TableRow onClick={navigateTo(data[indexR].link)} key={indexR}>
              {row.getVisibleCells().map((cell, indexC) => (
                <TableCell
                  className='cursor-pointer hover:bg-gray-500 truncate'
                  key={indexC}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='flex flex-col place-items-center gap-2 my-2'>
        <div>
          {amountOfEvents > 10 ? (
            <>
              <Button variant='outline' onClick={() => table.previousPage()}>
                Anterior
              </Button>
              <Button variant='outline' onClick={() => table.nextPage()}>
                Siguiente
              </Button>
            </>
          ) : null}
        </div>
        <p>
          {table.getRowModel().rows.length} de {amountOfEvents} eventos
        </p>
      </div>
    </section>
  );
}

export default TableProp;
