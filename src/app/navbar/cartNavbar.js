import Image from "next/image";
import Link from "next/link";
import imageSrcBlack from '/public/assets/jombang polosan logo black.png'
import { LockSimple } from "@phosphor-icons/react/dist/ssr";

export default function CartNavbar() {
  return (
    <div className="w-full max-w-[900px] sticky top-0 mx-auto bg-white dark:bg-neutral-800 border-b dark:border-neutral-400 p-4 flex justify-between items-center">
      <Link href='/' replace>
        <div className='flex justify-center items-center gap-6'>
          <Image src={imageSrcBlack} alt="Jombang-polosan-logo" width={50} height={50} />
        </div>
      </Link>
      <h1 className="font-bold text-xl">CheckOut</h1>
      <p>
        <LockSimple size={28} weight="fill" className="dark:text-[#f1f1f1] text-[#696969] " />
      </p>
    </div>
  )
}