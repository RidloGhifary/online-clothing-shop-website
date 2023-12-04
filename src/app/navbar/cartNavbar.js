import Image from "next/image";
import Link from "next/link";
import imageSrcBlack from '/public/assets/jombang polosan logo black.png'
import { LockSimple } from "@phosphor-icons/react/dist/ssr";

export default function CartNavbar() {
  return (
    <div className="w-full max-w-[900px] sticky top-0 mx-auto bg-white border-b p-4 flex justify-between items-center">
      <Link href='/'>
        <div className='flex justify-center items-center gap-6'>
          <Image src={imageSrcBlack} alt="Jombang-polosan-logo" width={50} height={50} />
        </div>
      </Link>
      <h1 className="font-bold text-xl">CheckOut</h1>
      <p>
        <LockSimple size={28} weight="fill" color="#595959" />
      </p>
    </div>
  )
}