"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-0 z-50 mx-auto flex w-full max-w-7xl -translate-x-1/2 items-center justify-between bg-white p-4 md:px-12">
      <div className="flex items-center justify-center gap-6">
        <Link href="/" className="flex cursor-pointer items-center gap-3">
          <Image
            src="/assets/icon.png"
            alt="Jombang-polosan-logo"
            width={50}
            height={50}
            priority
            className="aspect-auto h-auto w-16 object-contain"
          />
          <span className="hidden font-semibold sm:block">
            Jombang
            <br />
            Polosan
          </span>
        </Link>
      </div>

      <Link href="/cart" className="relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-sm">
          0
        </span>
        <ShoppingCartSimple size={30} />
      </Link>
    </nav>
  );
}
