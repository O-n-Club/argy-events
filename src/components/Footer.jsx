import React from "react";

function Footer() {
  return (
    <footer className='w-full flex place-content-center py-2 px-4 md:w-1/2'>
      <p className='text-sm'>
        Proyecto por{" "}
        <a
          className='underline underline-offset-2 text-orange-500 font-semibold'
          href='https://github.com/O-n-Club'
        >
          O(n) Club.
        </a>
      </p>
    </footer>
  );
}

export default Footer;
