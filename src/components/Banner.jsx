import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full max-w-[1200px] mx-auto p-4 mb-7">
      <div className="w-full">
        <Image src="/assets/bannercost.png" width={1500} height={1500} alt="banner"
          className="w-full object-cover object-center shadow-md"
        />
      </div>
    </section>
  )
}