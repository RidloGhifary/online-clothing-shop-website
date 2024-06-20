import Image from 'next/image'
import Link from 'next/link'
import { ArrowCircleDown } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-[100vh] relative">
          <Image src="/assets/main-background.jpg" width={1000} height={1000} priority alt="clothes" className="w-full h-full object-cover object-center" />

        <div className="absolute z-10 left-[2%] md:left-[5%] top-[30%] md:top-[40%] md:w-[50%] px-5 md:px-0">
          <div className="flex">
            <div className="w-[170px] h-0 border-t-4 border-neutral-200" />
            <div className="w-[170px] h-0 border-t-4 border-neutral-800" />
          </div>
          <h1 className="font-bold text-5xl text-neutral-100 drop-shadow-lg my-3">
            Jombang Polosan
          </h1>

          <p className="font-medium text-white drop-shadow-md">Welcome to <b><i>Jombang Polosan</i></b>, where simplicity meets style! Dive into a world of understated elegance with our curated collection of plain t-shirts. We believe that beauty lies in simplicity, and our plain tees are a testament to this philosophy.</p>

          <Link href="/#product" className="w-[150px] flex items-center justify-center gap-1 mt-4 font-medium bg-neutral-100 border border-neutral-900 py-1 px-5 rounded-md transition-all duration-200 hover:rounded-full dark:text-neutral-800">Explore
            <ArrowCircleDown size={22} color="#000000" />
          </Link>
        </div>
      </div>
      {/* <Colors />
      <ProductSection />
      <BannerPage />
      <InformationPage />
      <Map />
      <Colors /> */}
      {/* <Footer /> */}
    </>
  )
}
