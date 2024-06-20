import Image from 'next/image'
import imageSrcBlack from '/public/assets/jombang polosan logo black.png'
import { Envelope, InstagramLogo, MessengerLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function MobileNavbar() {
  return (
    <div className="bg-neutral-900 backdrop-blur-md h-[100vh] text-white py-4">
      <div className='flex justify-center items-center gap-6 -ml-7'>
        <Image src={imageSrcBlack} alt="Jombang-polosan-logo" width={50} height={50} />
        <h1 className='font-bold cursor-pointer -ml-6 drop-shadow-md'>Jombang Polosan</h1>
      </div>

      <ul className='p-5 mt-16'>
        <li className='font-semibold cursor-pointer hover:bg-white/30 hover:p-2 rounded transition-all duration-300 hover:translate-x-2 mb-7'>
          <Link href='#product'>Product</Link>
        </li>
        <li className='font-semibold cursor-pointer hover:bg-white/30 hover:p-2 rounded transition-all duration-300 hover:translate-x-2 mb-7'>
          <Link href='#information'>Information</Link>
        </li>
        <li className='font-semibold cursor-pointer hover:bg-white/30 hover:p-2 rounded transition-all duration-300 hover:translate-x-2 mb-7'>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>

      <div className="flex justify-center items-center gap-5 absolute bottom-20 left-[50%] translate-x-[-50%]">
        <div className='cursor-pointer transition-all duration-300 hover:scale-105'>
          <InstagramLogo size={30} color="#f5f5f5" />
        </div>
        <div className='cursor-pointer transition-all duration-300 hover:scale-105'>
          <WhatsappLogo size={30} color="#f5f5f5" />
        </div>
        <div className='cursor-pointer transition-all duration-300 hover:scale-105'>
          <Envelope size={30} color="#f5f5f5" />
        </div>
        <div className='cursor-pointer transition-all duration-300 hover:scale-105'>
          <MessengerLogo size={30} color="#f5f5f5" />
        </div>
      </div>

    </div>
  )
}