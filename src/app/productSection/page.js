import posterExpl1 from '/public/assets/info-1.jpg'
import posterExpl2 from '/public/assets/info-2.jpg'
import posterExpl3 from '/public/assets/info-3.jpg'

import Image from 'next/image';
import CartProduct from '../compents/cartProduct';

export default function ProductSection() {

  return (
    <div className="w-full max-w-[900px] mx-auto px-10 md:px-20 py-20" id='product'>
      <h1 className="text-center font-semibold text-3xl">Find Your Outfit</h1>
      <div className="md:grid md:grid-cols-3 mt-[75px]">

        <div className="grid grid-cols-2 md:col-span-2 gap-3 md:gap-0 md:gap-y-5 justify-items-center md:px-6">
          <CartProduct />
        </div>

        <div className='mt-5 md:mt-0'>
          <div className="relative w-full border rounded-lg mb-3 shadow-md">
            <Image src={posterExpl2}
              alt="poster"
              className='w-full object-cover object-center border rounded-lg' />
            <div className="border rounded-lg py-[50%] absolute top-0 left-0 bottom-0 right-0 p-4 w-full bg-black/30">
              <h1 className='text-neutral-100 text-6xl md:text-4xl font-semibold m-auto md:leading-10'>Open <u><i>10.00am</i></u></h1>
              <p className='text-neutral-100 font-medium mt-4 md:mt-2 text-base md:text-sm leading-snug'>buy now because you don`t know anything for tomorrow</p>
            </div>
          </div>

          <div className="relative w-full border rounded-lg mb-3 shadow-md">
            <Image src={posterExpl1}
              alt="poster"
              className='w-full object-cover object-center border rounded-lg' />
            <div className="border rounded-lg py-[50%] absolute top-0 left-0 bottom-0 right-0 p-4 w-full bg-black/30">
              <h1 className='text-neutral-100 text-6xl md:text-4xl font-semibold m-auto md:leading-10'>Close <u><i>17.00pm</i></u></h1>
              <p className='text-neutral-100 font-medium mt-4 md:mt-2 text-base md:text-sm leading-snug'>buy now because you don`t know anything for tomorrow</p>
            </div>
          </div>

          <div className="relative w-full border rounded-lg mb-3 shadow-md">
            <Image src={posterExpl3}
              alt="poster"
              className='w-full object-cover object-center border rounded-lg' />
            <div className="border rounded-lg py-[50%] absolute top-0 left-0 bottom-0 right-0 p-4 w-full bg-black/30">
              <h1 className='text-neutral-100 text-6xl md:text-4xl font-semibold m-auto md:leading-10'>Let`s <u><i>styling</i></u></h1>
              <p className='text-neutral-100 font-medium mt-4 md:mt-2 text-base md:text-sm leading-snug'>make your look more intractive and modern with Jombang polosan</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}