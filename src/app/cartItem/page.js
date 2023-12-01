'use client'

import { useEffect, useState } from "react";
import { CaretDoubleUp, CaretDoubleDown } from '@phosphor-icons/react/dist/ssr'
import CartNavbar from "../navbar/cartNavbar";

export default function cartItem() {
  const [updateCart, setUpdateCart] = useState([])
  const [orderSummary, setOrderSummary] = useState(false)

  useEffect(() => {
    let updateCart = JSON.parse(localStorage.getItem('cartData'));
    setUpdateCart(updateCart)
  }, [])

  const handleOrderSummary = () => {
    setOrderSummary(!orderSummary)
  }

  return (
    <>
      <CartNavbar />
      <div className="w-full max-w-[1200px] mx-auto px-10 md:px-20 py-20">
        {/* render cart product below here */}
        

        {/* order summary belo here */}
        <div className="w-full max-w-[900px] bg-white dark:bg-neutral-900 dark:text-white absolute bottom-0 left-[50%] translate-x-[-50%]">
          <div className="">
            <div className="flex justify-between items-center p-5 border-t">
              <p className="font-medium text-lg">Total Items : (<i>5</i>)</p>
              <button onClick={handleOrderSummary}>
                {orderSummary ?
                  <CaretDoubleUp size={28} weight="bold" /> :
                  <CaretDoubleDown size={28} weight="bold" />
                }
              </button>
            </div>

            <div className={orderSummary ?
              "p-4 h-0 hidden" :
              "p-4 transition-all duration-200 h-auto block"}>
              <h1 className="font-bold text-2xl">Order Summary</h1>

              <div className="flex flex-col my-3">
                <div className="flex justify-between items-center my-[2px]">
                  <p className="font-medium">Items(2):</p>
                  <p className="font-normal italic">Rp. 100.000</p>
                </div>
                <div className="flex justify-between items-center my-[2px]">
                  <p className="font-medium">Shipping & handling:</p>
                  <p className="font-normal italic border-b border-neutral-500 pb-2">Rp. 100.000</p>
                </div>
                <div className="flex justify-between items-center my-[2px]">
                  <p className="font-medium">Total before tax:</p>
                  <p className="font-normal italic mt-1">Rp. 100.000</p>
                </div>
                <div className="flex justify-between items-center my-[2px]">
                  <p className="font-medium">Estimated tax(10%):</p>
                  <p className="font-normal italic">Rp. 10.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-5 border-t">
            <div className="flex flex-col">
              <i className="text-neutral-600 text-base">Total price :</i>
              <p className="font-semibold text-xl">Rp. 100.000</p>
            </div>
            <button className="px-3 py-1 text-lg bg-neutral-900 text-neutral-100 cursor-pointer border rounded-lg hover:rounded-2xl">
              Checkout
            </button>
          </div>
        </div>

      </div>
    </>
  )
}