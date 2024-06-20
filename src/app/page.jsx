import Image from "next/image";
import Link from "next/link";
import { ArrowCircleDown, MapPinLine } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/navbar/Navbar";
import Colors from "@/components/Colors";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import InformationCard from "@/components/InformationCard";
import CartProduct from "./@productSection/_components/CartProduct";
import ShopAdd from "@/components/ShopAdd";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-full">
        <Image
          src="/assets/main-background.jpg"
          width={1000}
          height={1000}
          priority
          alt="clothes"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/80 to-black/0" />

        <div className="absolute left-[2%] top-[30%] z-10 px-5 md:left-[5%] md:top-[40%] md:w-[50%] md:px-0">
          <div className="flex">
            <div className="h-0 w-[170px] border-t-4 border-neutral-200" />
            <div className="h-0 w-[170px] border-t-4 border-neutral-800" />
          </div>
          <h1 className="my-3 text-5xl font-bold text-neutral-100 drop-shadow-lg">
            Jombang Polosan
          </h1>

          <p className="font-medium text-white drop-shadow-md">
            Welcome to{" "}
            <b>
              <i>Jombang Polosan</i>
            </b>
            , where simplicity meets style! Dive into a world of understated
            elegance with our curated collection of plain t-shirts. We believe
            that beauty lies in simplicity, and our plain tees are a testament
            to this philosophy.
          </p>

          <Link
            href="/#product"
            className="mt-4 flex w-[150px] items-center justify-center gap-1 rounded-md border border-neutral-900 bg-neutral-100 px-5 py-1 font-medium transition-all duration-200 hover:rounded-full dark:text-neutral-800"
          >
            Explore
            <ArrowCircleDown size={22} color="#000000" />
          </Link>
        </div>
      </div>

      <Colors />
      <Banner />

      <div className="mx-auto grid max-w-[650px] grid-cols-1 gap-9">
        <InformationCard
          imagePath="/assets/poster1.jpg"
          title="Free ongkir se-Jawa"
          description="Great news for who live in java island because you could order
              from home without paying"
        />
        <InformationCard
          imagePath="/assets/poster2.jpg"
          title="Double stack Jahitan"
          description="Grade A quality, cotton combed 24s premium reactive"
          additionalClassName="order-last"
        />
        <InformationCard
          imagePath="/assets/poster3.jpg"
          title="Jahitan Rantai"
          description="One of the references for making quality t-shirts, because the
              results are quite neat and unique."
        />
      </div>

      <div id="product">
        <h2 className="text-center text-3xl font-semibold">Find Your Outfit</h2>
        <div className="mt-[75px] md:grid md:grid-cols-3">
          <div className="grid grid-cols-2 justify-items-center gap-3 md:col-span-2 md:gap-0 md:gap-y-5 md:px-6">
            <CartProduct />
          </div>

          <div className="mt-5 md:mt-0">
            <ShopAdd
              imagePath="/assets/info-1.jpg"
              title="Open 10.00AM"
              description="Buy now because you don`t know anything for tomorrow"
            />
            <ShopAdd
              imagePath="/assets/info-2.jpg"
              title="Close 17.00PM"
              description="Buy now because you don`t know anything for tomorrow"
            />
            <ShopAdd
              imagePath="/assets/info-3.jpg"
              title="Lets styling"
              description="Make your look more interactive and modern with Jombang polosan"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:p-10">
        <div className="my-4 flex items-center gap-1">
          <MapPinLine size={35} color="#6b7280" weight="fill" />
          <p className="text-lg font-medium text-neutral-800 dark:text-neutral-100">
            Jalan Jaksa Agung No.26 (Belakang SMAN 1 KOTA JOMBANG) Kabupaten
            Jombang, Jawa Timur, Indonesia
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3955.1840557505334!2d112.233!3d-7.5549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78401f7a798743%3A0xfce15c855535872f!2sSMA%20Negeri%201%20Jombang!5e0!3m2!1sen!2sid!4v1701699881283!5m2!1sen!2sid"
          width="800"
          height="600"
          className="h-[500px] w-full rounded-lg border-0 shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Colors />
      <Footer />
    </>
  );
}
