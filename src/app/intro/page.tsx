import { useTranslations } from "next-intl";
import { LangSwitcher } from "@/components/lang-switcher";

export default function Intro() {
  const t = useTranslations();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <LangSwitcher />
      <h1 className="text-2xl font-bold">
        {t("intro", { name: "John", count: 10 })}
      </h1>
    </div>
  );
}
