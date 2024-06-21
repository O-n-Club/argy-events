import React from "react";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  return (
    <header className='w-full flex justify-between py-2 px-4 md:w-1/2'>
      <h1 className='text-2xl font-bold'>O(n) Club</h1>
      <ThemeSwitch />
    </header>
  );
}

export default Header;
