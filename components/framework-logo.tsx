"use client";
import Logo from "@/components/logo";
import { IconSeparator } from "./ui/icons";
import texts from "@/app/evaluace/texts";
import Link from "next/link";
import { urlName } from "@/framework";
import { useFramework } from "@/lib/hooks/use-framework";

export default function FrameworkLogo() {
  const { lang } = useFramework();
  return (
    <div className="flex text-text text-sm items-center">
      <Link href={`/`}>
        <Logo />
      </Link>
      <IconSeparator className="w-6 h-6 text-text/50" />
      <Link
        href={`/${urlName}`}
        className="text-sm font-semibold hover:bg-neutral-100 px-1.5 -ml-1.5 py-0.5 rounded-lg"
      >
        {texts["framework-name"][lang]}
      </Link>
    </div>
  );
}
