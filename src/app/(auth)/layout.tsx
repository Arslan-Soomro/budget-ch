import { LangSwitcher } from "@/components/lang-switcher";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-50">
      <section className="relative flex h-full w-full max-w-xl flex-1 flex-col items-center gap-4">
        <div className="flex items-center">
          <Image
            src="/assets/images/bh-logo.png"
            width={50}
            height={50}
            alt="company logo"
          />
          <div className="flex items-center font-bold">
            <span>budgethub</span>
            <span className="text-blue-600">.ch</span>
          </div>
        </div>

        <div className="absolute -top-4 right-0 flex items-center gap-2">
          <ModeToggle />
          <LangSwitcher />
        </div>
        {children}
      </section>
    </main>
  );
}
