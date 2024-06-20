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
      <Banner />
      <Information />

      <Map />
       <div className="w-full md:p-10">
      <div className="my-4 flex items-center gap-1">
        <MapPinLine size={28} color="#6b7280" weight="fill" />
        <p className="font-medium text-lg text-neutral-800 dark:text-neutral-100">Jalan Jaksa Agung No.26 (Belakang SMAN 1 KOTA JOMBANG) Kabupaten Jombang, Jawa Timur, Indonesia</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.1840557505334!2d112.233!3d-7.5549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78401f7a798743%3A0xfce15c855535872f!2sSMA%20Negeri%201%20Jombang!5e0!3m2!1sen!2sid!4v1701699881283!5m2!1sen!2sid" width="800"
        height="600"
        className="border-0 w-full h-[500px] rounded-lg shadow-md"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

      <Colors /> */}
      {/* <Footer /> */}
    </>
  )
}
