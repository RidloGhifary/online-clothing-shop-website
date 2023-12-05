import Image from "next/image";
import poster1 from '/public/assets/poster1.jpg'
import poster2 from '/public/assets/poster2.jpg'
import poster3 from '/public/assets/poster3.jpg'

export default function InformationPage() {
  return (
    <section className="w-full max-w-[900px] mx-auto p-4">
      <div className="grid grid-cols-1 gap-9 max-w-[650px] mx-auto">
        <div className="grid grid-cols-2 items-center justify-center">
          <Image src={poster1} alt="posterInformation" width={300} height={300}
            className="rounded-md shadow-md w-[200px] h-[200px] mx-auto object-cover object-center" />
          <div className="">
            <h1 className="text-neutral-900 text-5xl font-semibold">Free ongkir se-Jawa</h1>
            <p className="text-neutral-500">Great news for who live in java island because you could order from home without paying</p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center">
          <div className="text-right">
            <h1 className="text-neutral-900 text-5xl font-semibold">Double stack Jahitan</h1>
            <p className="text-neutral-500">Grade A quality, cotton combed 24s premium reactive</p>
          </div>
          <Image src={poster2} alt="posterInformation" width={300} height={300}
            className="rounded-md shadow-md w-[200px] h-[200px] mx-auto object-cover object-center" />
        </div>
        <div className="grid grid-cols-2 items-center justify-center">
          <Image src={poster3} alt="posterInformation" width={300} height={300}
            className="rounded-md shadow-md w-[200px] h-[200px] mx-auto object-cover object-center" />
          <div className="">
            <h1 className="text-neutral-900 text-5xl font-semibold">Jahitan Rantai</h1>
            <p className="text-neutral-500">One of the references for making quality t-shirts, because the results are quite neat and unique.</p>
          </div>
        </div>
      </div>
    </section>
  )
}