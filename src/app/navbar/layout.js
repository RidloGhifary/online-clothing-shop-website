'use client'

import Image from 'next/image'
import imageSrcBlack from '../../../assets/jombang polosan logo black.png'
import imageSrcWhite from '../../../assets/jombang polosan logo white.png'
import { List, MoonStars, ShoppingCartSimple, Sun, X } from '@phosphor-icons/react/dist/ssr'
import MobileLayout from './mobileLayout'
import React, { useState } from 'react'

export default function Navbar() {

  const [mobileLayout, setMobileLayout] = useState(false)
  const [chooseModeLayout, setChooseModeLayout] = useState(false)

  const showMobileLayout = () => {
    setMobileLayout(!mobileLayout)
  }

  const chooseMode = () => {
    setChooseModeLayout(!chooseModeLayout)
    console.log(chooseModeLayout);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', chooseModeLayout)
    }
  }

  return (
    <div className={chooseModeLayout ? 'dark' : ' '}>
      <div className='flex justify-between items-center p-4 px-5 md:px-12 backdrop-blur-sm bg-white/50 dark:bg-neutral-900'>

        <div className='flex justify-center items-center gap-6'>
          {
            chooseModeLayout ?
              <Image src={imageSrcWhite} alt="Jombang-polosan-logo" width={50} height={50} />
              :
              <Image src={imageSrcBlack} alt="Jombang-polosan-logo" width={50} height={50} />
          }
          <h1 className='font-bold cursor-pointer -ml-6 drop-shadow-md dark:text-white'>Jombang Polosan</h1>
        </div>

        <div className='hidden md:block'>
          <ul className={
            chooseModeLayout ? 'text-white flex justify-center items-center gap-6'
              : 'flex justify-center items-center gap-6'}>
            <li className='font-semibold hover:underline cursor-pointer transition-all duration-300 hover:-translate-x-2'>
              <a href='#'>Product</a>
            </li>
            <li className='font-semibold hover:underline cursor-pointer transition-all duration-300 hover:translate-x-2'>
              <a href='#'>Information</a>
            </li>
            <li className='font-semibold hover:underline cursor-pointer transition-all duration-300 hover:translate-x-2'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='hidden md:flex justify-center items-center gap-6'>
          <div className="cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={chooseMode}>
            {
              chooseModeLayout ?
                <Sun size={29} color="#ffffff" /> :
                <MoonStars size={30} color="#292929" />
            }
          </div>
          <div className="relative cursor-pointer transition-all duration-300 hover:scale-105">
            <ShoppingCartSimple size={30}
              color={
                chooseModeLayout ? '#ffffff' : '#292929'} />
            <p className={
              chooseModeLayout ?
                'absolute -top-4 left-[10px] text-white'
                : 'absolute -top-4 left-[10px]'}
            >5</p>
          </div>
        </div>

        {/* HAMBURGER MENU */}
        <div className='flex justify-center items-center gap-5 md:hidden'>
          <div className="cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={chooseMode}>
            {
              chooseModeLayout ?
                <Sun size={29} color="#ffffff" /> :
                <MoonStars size={30} color="#292929" />
            }
          </div>
          <div className="relative cursor-pointer transition-all duration-300 hover:scale-105">
            <ShoppingCartSimple size={30} color={
              chooseModeLayout ? '#ffffff' : '#292929'} />
            <p className={
              chooseModeLayout ?
                'text-white absolute bg-black px-[3px] -top-2 left-[7.6px]' :
                'absolute bg-white px-[3px] -top-2 left-[7.6px]'}>
              5</p>
          </div>
          <div className='cursor-pointer transition-all duration-300 hover:scale-105'
            onClick={showMobileLayout}>
            {
              mobileLayout ?
                <X size={30}
                  color={chooseModeLayout ? "#ffffff" : "#292929"}
                  weight="bold" /> :
                <List size={30}
                  color={chooseModeLayout ? "#ffffff" : "#292929"}
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
    </div>
  )
}