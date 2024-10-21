'use client'

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Inicializa el estado con el tema almacenado en localStorage o 'light' por defecto
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("theme") || "light";
    }
    return "light"; // Valor predeterminado en caso de que no esté disponible el 'window'
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Guarda el tema en localStorage
  }, [theme]); // Ejecutar el efecto cada vez que cambie el tema

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1 bg-blue-100 dark:bg-gray-300 text-black dark:hover:border-white dark:hover:border dark:text-white rounded-lg flex items-center hover:border-black border dark:border-0 justify-center"
    >
      {theme === "light" ? (
        <MoonIcon className="w-4 h-4 lg:w-6 lg:h-6 text-blue-800" />
      ) : (
        <SunIcon className="w-4 h-4 lg:w-6 lg:h-6 text-red-400" />
      )}
    </button>
  );
}
