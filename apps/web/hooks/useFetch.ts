"use client";

import { useEffect, useState } from "react";


type Theme = "dark" | "light";


export default function useTheme() {

  const [theme, setTheme] = useState<Theme>("dark");


  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme") as Theme | null;


    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    }

  }, []);



  function toggleTheme() {

    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";


    setTheme(newTheme);


    localStorage.setItem(
      "theme",
      newTheme
    );


    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );

  }


  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
