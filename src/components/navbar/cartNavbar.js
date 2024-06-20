import Image from "next/image";
import Link from "next/link";
import { LockSimple } from "@phosphor-icons/react/dist/ssr";

export default function CartNavbar() {
  return (
    <div className="sticky top-0 mx-auto flex w-full max-w-[900px] items-center justify-between border-b bg-white p-4 dark:border-neutral-400 dark:bg-neutral-800">
      <Link href="/">
        <div className="flex items-center justify-center gap-6">
          <Image
            src="/assets/icon.png"
            alt="Jombang-polosan-logo"
            width={100}
            height={100}
            className="aspect-auto h-auto w-16 object-contain"
          />
        </div>
      </Link>
      <h1 className="text-xl font-bold">CheckOut</h1>
      <p>
        <LockSimple size={28} weight="fill" className="text-[#696969]" />
      </p>
    </div>
  );
}
