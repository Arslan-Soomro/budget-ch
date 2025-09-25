"use client";

import { useLocale } from "next-intl";
import { setLanguage } from "@/app/actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", name: "English"},
  { code: "fr", name: "Français"},
  { code: "de", name: "Deutsch"},
  { code: "it", name: "Italiano"},
];

export function LangSwitcher() {
  const currentLocale = useLocale();

  const handleLanguageChange = async (locale: string) => {
    const formData = new FormData();
    formData.append("locale", locale);
    formData.append("pathname", window.location.pathname);
    await setLanguage(formData);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue>
          {currentLanguage && (
            <div className="flex items-center gap-2">
              <span>{currentLanguage.name}</span>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center gap-2">
              <span>{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}