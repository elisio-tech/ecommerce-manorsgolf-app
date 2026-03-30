import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 h-screen">
      {/* IMAGEM */}
      <div className="relative">
        <Image
          src="/img/hero2.avif"
          alt="hero"
          fill
          className="object-contain w-full"
          priority
        />
      </div>

      {/* OUTRO LADO */}
      <div className=""></div>
    </section>
  );
}
