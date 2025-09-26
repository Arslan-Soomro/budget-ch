"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white px-3 py-1"
      onClick={toggleTheme}
    >
      <span>🌓</span>
      <span className="text-xs font-bold">
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </span>
    </div>
  );
}
