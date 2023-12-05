import Image from "next/image";
import mainBg from '/public/assets/main-background.jpg'
import { ArrowCircleDown } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  return (
    <div className="w-full h-[500px] relative">
      <div className="w-full h-full">
        <Image src={mainBg} alt="Main-background-header" className="w-full h-full object-cover object-center" />
      </div>

      <div className="absolute z-10 left-[2%] md:left-[5%] top-[30%] md:top-[40%] md:w-[50%] px-5 md:px-0">

        <div className="flex">
          <div className="w-[170px] h-0 border-t-4 border-neutral-200" />
          <div className="w-[170px] h-0 border-t-4 border-neutral-800" />
        </div>
        <h1 className="font-bold text-5xl text-neutral-100 drop-shadow-lg my-3">
          Jombang Polosan
        </h1>

        <p className="font-medium text-white drop-shadow-md">Welcome to <b><i>Jombang Polosan</i></b>, where simplicity meets style! Dive into a world of understated elegance with our curated collection of plain t-shirts. We believe that beauty lies in simplicity, and our plain tees are a testament to this philosophy.</p>

        <button className="flex items-center justify-center gap-1 mt-4 font-medium bg-neutral-100 border border-neutral-900 py-1 px-5 rounded-md transition-all duration-200 hover:rounded-full dark:text-neutral-800">Explore
          <ArrowCircleDown size={22} color="#000000" />
        </button>
      </div>
    </div>
  )
}