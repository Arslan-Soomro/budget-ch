"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const t = useTranslations("authpages");

  return (
    <div
      className="flex cursor-pointer items-center justify-between gap-2 rounded-lg border bg-white px-3 py-1 dark:bg-zinc-900"
      onClick={toggleTheme}
    >
      <span>🌓</span>
      <span className="text-xs font-bold">
        {theme === "dark" ? t("light-mode") : t("dark-mode")}
      </span>
    </div>
  );
}
