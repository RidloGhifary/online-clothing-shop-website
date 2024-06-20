'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import imageSrcBlack from '/public/assets/jombang polosan logo black.png'
import imageSrcWhite from '/public/assets/jombang polosan logo white.png'

import { List, X, MoonStars, ShoppingCartSimple, Sun } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'

export default function Navbar() {

  const [mobileLayout, setMobileLayout] = useState(false)
  const [dataStorages, setDataStorage] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('cartData')) || []
    setDataStorage(dataStorage)
  }, [dataStorages])

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
    <div className='w-full fixed top-0 left-0 z-50 flex justify-between items-center p-5 md:px-12 bg-white dark:bg-neutral-900 dark:text-neutral-100'>

        <div className='flex justify-center items-center gap-6'>
      <Link href='/'>
          {darkMode ?
            <Image src={imageSrcWhite} alt="Jombang-polosan-logo" width={50} height={50} /> :
            <Image src={imageSrcBlack} alt="Jombang-polosan-logo" width={50} height={50} />
          }
          <h1 className='font-bold cursor-pointer -ml-6 drop-shadow-md dark:text-white'>Jombang Polosan</h1>
      </Link>
        </div>

      
    </div>
  )
}