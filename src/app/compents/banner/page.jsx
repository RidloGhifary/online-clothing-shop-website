import Image from "next/image";
import bannerImg from '/public/assets/bannercost.png'

export default function BannerPage() {
  return (
    <section className="w-full max-w-[1200px] mx-auto p-4 mb-7">
      <div className="w-full">
        <Image src={bannerImg} width={1500} height={1500} alt="bannerImg"
          className="w-full object-cover object-center shadow-md"
        />
      </div>
    </section>
  )
}