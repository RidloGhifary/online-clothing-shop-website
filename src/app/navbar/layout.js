'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import imageSrcBlack from '/public/assets/jombang polosan logo black.png'
import imageSrcWhite from '/public/assets/jombang polosan logo white.png'
import MobileLayout from './mobileLayout'
import { List, X, MoonStars, ShoppingCartSimple, Sun } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function Navbar() {

  const [mobileLayout, setMobileLayout] = useState(false)
  const [dataStorages, setDataStorage] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('cartData')) || []
    setDataStorage(dataStorage)
  }, [])

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const showMobileLayout = () => {
    setMobileLayout(!mobileLayout)
  }

  return (
    <div className='w-full fixed top-0 left-0 z-50 flex justify-between items-center p-5 md:px-12 backdrop-blur-sm bg-white/50 dark:bg-neutral-900 dark:text-neutral-100'>

      <Link href='/'>
        <div className='flex justify-center items-center gap-6'>
          {darkMode ?
            <Image src={imageSrcWhite} alt="Jombang-polosan-logo" width={50} height={50} /> :
            <Image src={imageSrcBlack} alt="Jombang-polosan-logo" width={50} height={50} />
          }
          <h1 className='font-bold cursor-pointer -ml-6 drop-shadow-md dark:text-white'>Jombang Polosan</h1>
        </div>
      </Link>

      <div className='hidden md:block'>
        <ul className='flex justify-center items-center gap-6'>
          <li className='font-semibold hover:underline cursor-pointer transition-all duration-300 hover:-translate-x-2'>
            <Link href='#product'>Product</Link>
          </li>
          <li className='font-semibold hover:underline cursor-pointer transition-all duration-300 hover:translate-x-2'>
            <Link href='#information'>Information</Link>
          </li>
          <li className='font-semibold hover:underline cursor-pointer transition-all duration-300 hover:translate-x-2'>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
      </div>

      <div className='hidden md:flex justify-center items-center gap-6'>
        <div className="cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ?
            <Sun size={30} color='#f1f1f1' /> :
            <MoonStars size={30} color="#292929" />
          }
        </div>
        <div className="relative cursor-pointer transition-all duration-300 hover:scale-105">
          <Link href="/cartItem">
            <ShoppingCartSimple size={30}
              color={darkMode ? '#f1f1f1' : '#292929'} />
          </Link>
          <p className='absolute -top-4 left-[10px]'>
            {dataStorages.length || 0}
          </p>
        </div>
      </div>

      {/* HAMBURGER MENU */}
      <div className='flex justify-center items-center gap-5 md:hidden'>
        <div className="cursor-pointer transition-all duration-300 hover:scale-105">
          {darkMode ?
            <Sun size={30} color='#f1f1f1' /> :
            <MoonStars size={30} color="#292929" />
          }        </div>
        <div className="relative cursor-pointer transition-all duration-300 hover:scale-105">
          <Link href="/cartItem">
            <ShoppingCartSimple size={30}
              color={darkMode ? '#f1f1f1' : '#292929'} />
          </Link>
          <p className='absolute -top-4 left-[10px]'>
            {dataStorages.length || 0}
          </p>
        </div>
        <div className='cursor-pointer transition-all duration-300 hover:scale-105'
          onClick={showMobileLayout}>
          {
            mobileLayout ?
              <X size={30}
                color={darkMode ? '#f1f1f1' : '#292929'}
                weight="bold" /> :
              <List size={30}
                color={darkMode ? '#f1f1f1' : '#292929'}
                weight="bold" />
          }
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div className={mobileLayout ?
        'md:hidden block absolute z-50 top-0 left-0 w-[250px] h-[100vh] transition-all duration-300' :
        'md:hidden block absolute z-50 top-0 left-[-200%] transition-all duration-300'}>
        <MobileLayout />
      </div>
    </div>
  )
}