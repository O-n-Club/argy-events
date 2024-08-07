import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

function Header() {
  return (
    <header className='w-full flex justify-between py-2 md:w-full px-4 lg:px-32 xl:px-60 2xl:px-72'>
      <h1 className='text-2xl font-bold hover:text-orange-500 transition-colors ease-in-out  '>
        <Link href='https://github.com/O-n-Club'>O(n) Club</Link>
      </h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
