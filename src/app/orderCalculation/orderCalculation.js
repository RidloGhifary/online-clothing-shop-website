'use client'

import { useEffect, useState } from "react";
import { CaretDoubleUp, CaretDoubleDown } from '@phosphor-icons/react/dist/ssr'

export default function OrderCalculation() {
  const [dataCart, setDataCart] = useState([])
  const [orderSummary, setOrderSummary] = useState(true)

  useEffect(() => {
    let dataCart = JSON.parse(localStorage.getItem('cartData'));
    setDataCart(dataCart)
  }, [dataCart])


  const handleOrderSummary = () => {
    setOrderSummary(!orderSummary)
  }

  const calculateTotalPrice = () => {
    return dataCart.reduce((total, item) => total + item.price, 0);
  };

  const calculateShippingCost = () => {
    return dataCart.reduce((total, item) => total + item.deliveryOption.shippingCost, 0);
  }

  const totalBeforeTax = () => {
    return calculateTotalPrice() + calculateShippingCost()
  }

  const calculateTax = () => {
    const totalBeforeTax = calculateTotalPrice() + calculateShippingCost();
    const taxRate = 0.1;
    return totalBeforeTax * taxRate;
  };

  const formattedTax = Number(calculateTax().toString().replace(/^(\d+)\.(\d{1})$/, '$1.$200'))

  const totalAfterTax = () => {
    return totalBeforeTax() + calculateTax();
  };

  return (
    <div className="w-full max-w-[900px] bg-white dark:bg-neutral-900 dark:text-white sticky bottom-0 left-[50%]">
      <div className="">
        <div className="flex justify-between items-center p-5 border-t">
          <p className="font-medium text-lg">Total Items : (<b>{dataCart.length}</b>)</p>
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
              <p className="font-medium">Items(<b>{dataCart.length}</b>):</p>
              <p className="font-normal italic">Rp. {calculateTotalPrice()}.000</p>
            </div>
            <div className="flex justify-between items-center my-[2px]">
              <p className="font-medium">Shipping & handling:</p>
              <p className="font-normal italic border-b border-neutral-500 pb-2">Rp. {calculateShippingCost()}.000</p>
            </div>
            <div className="flex justify-between items-center my-[2px]">
              <p className="font-medium">Total before tax:</p>
              <p className="font-normal italic mt-1">Rp. {totalBeforeTax()}.000</p>
            </div>
            <div className="flex justify-between items-center my-[2px]">
              <p className="font-medium">Estimated tax(10%):</p>
              <p className="font-normal italic">Rp. {(Math.round(formattedTax) / 1).toFixed(1)}00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-5 border-t">
        <div className="flex flex-col">
          <i className="text-neutral-600 text-base">Total price :</i>
          <p className="font-semibold text-xl">Rp. {totalAfterTax()}.000</p>
        </div>
        <button className="px-3 py-1 text-lg bg-neutral-900 text-neutral-100 cursor-pointer border rounded-lg hover:rounded-2xl">
          Checkout
        </button>
      </div>
    </div>
  )
}