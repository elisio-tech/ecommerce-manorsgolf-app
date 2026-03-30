import React from "react";
import Link from "next/link";
import Image from "next/image";
import BtnCart from "@/app/components/ui/BtnCart";
import BtnMenu from "@/app/components/ui/BtnMenu";

export default function Header() {
  const links = ["shop", "shoes", "polos"];
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white">
      <nav className="uppercase grid grid-cols-3 items-center mx-12 py-3 text-zinc-600">
        <div className="flex gap-8 items-center justify-self-start">
          <BtnMenu />
          <ul className="inline-flex gap-4">
            {links.map((link, i) => (
              <li key={i}>
                <Link href={`/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Link href={"/"} className="justify-self-center">
          <Image src={"/logo/logo.png"} alt="logo" width={70} height={100} />
        </Link>

        <ul className="flex gap-4 justify-self-end">
          <Link href={"/account"}>Account</Link>
          <BtnCart />
        </ul>
      </nav>
    </header>
  );
}
