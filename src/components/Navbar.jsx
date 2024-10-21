'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 dark:bg-gray-900 p-5">
      <div className="flex items-center text-center justify-between">
        <div className="flex items-center">
          <Image src="/GG-logo.png" alt="Logo" width={75} height={75} />
          <h1 className="text-2xl ml-2 hover:text-blue-400">Gabriel Jorge García</h1>
        </div>
        <div className="hidden md:flex text-center text-xl space-x-4 ">
          <div className="flex flex-row gap-1 items-center rounded-sm">
            <ThemeToggle />
          </div>
          <Link href="/" className=" hover:text-blue-400">Home</Link>
          <Link href="/about" className=" hover:text-blue-400">About me</Link>
          <Link href="/works" className=" hover:text-blue-400">Work Experience</Link>
          <Link href="/skills" className=" hover:text-blue-400">Skills</Link>
          <Link href="/projects" className=" hover:text-blue-400">Projects</Link>
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col space-y-2 mt-2">
          <li className="flex flex-row gap-1 items-center mt-auto py-4 border-t-2 max-lg:px-1  rounded-sm ">
            <ThemeToggle />
          </li>
            <li>
              <Link href="/" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>About me</Link>
            </li>
            <li>
              <Link href="/works" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Work Experience</Link>
            </li>
            <li>
              <Link href="/skills" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Skills</Link>
            </li>
            <li>
              <Link href="/projects" className="text-white hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
