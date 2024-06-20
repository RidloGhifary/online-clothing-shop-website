"use client";

import { useEffect, useState } from "react";
import { CaretDoubleUp, CaretDoubleDown } from "@phosphor-icons/react/dist/ssr";
import RupiahFormat from "@/utils/rupiahFormat";

export default function OrderCalculation() {
  const [dataCart, setDataCart] = useState([]);
  const [orderSummary, setOrderSummary] = useState(true);

  useEffect(() => {
    let dataCart = JSON.parse(localStorage.getItem("cartData"));
    setDataCart(dataCart);
  }, [dataCart]);

  const handleOrderSummary = () => {
    setOrderSummary(!orderSummary);
  };

  const calculateTotalPrice = () => {
    return dataCart?.reduce((total, item) => total + item.price, 0);
  };

  const calculateShippingCost = () => {
    return dataCart?.reduce((total, item) => {
      const shippingCost = item?.deliveryOption?.shippingCost || 0;
      return total + shippingCost;
    }, 0);
  };

  const totalBeforeTax = () => {
    return calculateTotalPrice() + calculateShippingCost();
  };

  const calculateTax = () => {
    const totalBeforeTax = calculateTotalPrice() + calculateShippingCost();
    const taxRate = 0.1;
    return totalBeforeTax * taxRate;
  };

  const totalAfterTax = () => {
    return totalBeforeTax() + calculateTax();
  };

  return (
    <div
      className={
        dataCart?.length === 0
          ? "fixed bottom-0 left-[50%] w-full max-w-[900px] translate-x-[-50%] bg-white dark:bg-neutral-800 dark:text-neutral-100"
          : "sticky bottom-0 left-[50%] w-full max-w-[900px] bg-white dark:bg-neutral-800 dark:text-neutral-100"
      }
    >
      <div className="">
        <div className="flex items-center justify-between border-t p-5 dark:border-neutral-400">
          <p className="text-lg font-medium">
            Total Items : (<b>{dataCart?.length}</b>)
          </p>
          <button onClick={handleOrderSummary}>
            {orderSummary ? (
              <CaretDoubleUp size={28} weight="bold" />
            ) : (
              <CaretDoubleDown size={28} weight="bold" />
            )}
          </button>
        </div>

        <div
          className={
            orderSummary
              ? "hidden h-0 p-4"
              : "block h-auto p-4 transition-all duration-200"
          }
        >
          <h1 className="text-2xl font-bold">Order Summary</h1>

          <div className="my-3 flex flex-col">
            <div className="my-[2px] flex items-center justify-between">
              <p className="font-medium">
                Items(<b>{dataCart?.length}</b>):
              </p>
              <p className="font-normal italic">
                {RupiahFormat(calculateTotalPrice())}
              </p>
            </div>
            <div className="my-[2px] flex items-center justify-between">
              <p className="font-medium">Shipping & handling:</p>
              <p className="border-b border-neutral-500 pb-2 font-normal italic">
                {RupiahFormat(calculateShippingCost())}
              </p>
            </div>
            <div className="my-[2px] flex items-center justify-between">
              <p className="font-medium">Total before tax:</p>
              <p className="mt-1 font-normal italic">
                {RupiahFormat(totalBeforeTax())}
              </p>
            </div>
            <div className="my-[2px] flex items-center justify-between">
              <p className="font-medium">Estimated tax(10%):</p>
              <p className="font-normal italic">
                {RupiahFormat(calculateTax())}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t p-5 dark:border-neutral-400">
        <div className="flex flex-col">
          <i className="text-base text-neutral-600 dark:text-neutral-400">
            Total price :
          </i>
          <p className="text-xl font-semibold">
            {RupiahFormat(totalAfterTax())}
          </p>
        </div>
        <button
          disabled={dataCart && dataCart?.length < 1}
          className="cursor-pointer rounded-lg border bg-neutral-900 px-3 py-1 text-lg text-neutral-100 transition hover:rounded-xl disabled:bg-black/60 dark:border-neutral-400"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
