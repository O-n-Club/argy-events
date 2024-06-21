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
  },
  {
    header: "Nombre",
    accessorKey: "title",
  },
  {
    header: "Descripción",
    accessorKey: "description",
  },
  {
    header: "Ciudad",
    accessorKey: "city",
  },
  {
    header: "Hora",
    accessorKey: "time",
  },
  {
    header: "Organiza",
    accessorKey: "organize",
  },
];

function TableProp({ data }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

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
            <TableRow key={indexR}>
              {row.getVisibleCells().map((cell, indexC) => (
                <TableCell key={indexC}>
                  {indexC === 2 ? (
                    <a href={data[indexR].link}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </a>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex place-content-center '>
        <Button variant='outline' onClick={() => table.previousPage()}>
          Anterior
        </Button>
        <Button variant='outline' onClick={() => table.nextPage()}>
          Siguiente
        </Button>
      </div>
    </section>
  );
}

export default TableProp;
