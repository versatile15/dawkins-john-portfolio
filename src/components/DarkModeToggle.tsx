"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true); // default to dark mode!

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-4 rounded-full border border-accent p-2 bg-transparent hover:bg-card dark:hover:bg-surface transition"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <Sun size={18} className="text-accent" /> : <Moon size={18} className="text-accent" />}
    </button>
  );
}
