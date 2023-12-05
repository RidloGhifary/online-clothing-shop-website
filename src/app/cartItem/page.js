'use client'

import { useEffect, useState } from "react";
import CartNavbar from "../navbar/cartNavbar";
import Image from "next/image";
import OrderCalculation from "../orderCalculation/orderCalculation";
import DeliveryDate from "../compents/deliveryDate/deliveryDate";
import { FormatRupiah } from "@arismun/format-rupiah";
import Link from "next/link";

export default function cartItem() {
  const [updateCart, setUpdateCart] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let updateCart = JSON.parse(localStorage.getItem('cartData'));
    setUpdateCart(updateCart)
  }, [updateCart])

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

  const saveStorage = () => {
    localStorage.setItem('cartData', JSON.stringify(updateCart))
  }

  const increaseAmount = (index) => {
    const updateCarts = [...updateCart]
    if (updateCarts[index].amount < 100) {
      updateCarts[index].amount += 1

      switch (updateCart[index].size) {
        case 'XS':
          updateCart[index].price += 24000
          break;
        case 'S':
          updateCart[index].price += 29000
          break;
        case 'M':
          updateCart[index].price += 34000
          break;
        case 'L':
          updateCart[index].price += 39000
          break;
        case 'XL':
          updateCart[index].price += 44000
          break;
        case 'XXL':
          updateCart[index].price += 49000
          break;

        default:
          updateCart[index].price = updateCart[index].price
          break;
      }
    } else {
      return;
    }
    setUpdateCart(updateCarts);
    saveStorage()
  }

  const decreaseAmount = (index) => {
    const updateCarts = [...updateCart]
    if (updateCarts[index].amount > 1) {
      updateCarts[index].amount -= 1
      switch (updateCart[index].size) {
        case 'XS':
          updateCart[index].price -= 24000
          break;
        case 'S':
          updateCart[index].price -= 29000
          break;
        case 'M':
          updateCart[index].price -= 34000
          break;
        case 'L':
          updateCart[index].price -= 39000
          break;
        case 'XL':
          updateCart[index].price -= 44000
          break;
        case 'XXL':
          updateCart[index].price -= 49000
          break;

        default:
          updateCart[index].price = updateCart[index].price
          break;
      }
    } else {
      return;
    }
    setUpdateCart(updateCarts);
    saveStorage()
  }

  const deleteProductFromCart = (index) => {
    updateCart.splice(index, 1)
    saveStorage()
  }

  return (
    <div className="relative w-full h-full min-h-[100vh] max-w-[900px] mx-auto bg-white dark:bg-neutral-800">
      <CartNavbar />
      <div className="w-full mx-auto px-10 md:px-20 pt-8">
        {/* render cart product below here */}
        {
          updateCart.length === 0 ?
            <div className="mb-20">
              <h1 className="text-2xl text-neutral-800 font-semibold mb-3">Looking for something?</h1>
              <Link href="/" className="bg-neutral-800 hover:bg-neutral-700 text-neutral-100 py-2 px-5 rounded-lg shadow-md">
                Order now
              </Link>
            </div>
            :
            updateCart?.map((cart, i) => {
              return (
                <section className="w-full grid grid-cols-2 gap-4 md:gap-0 items-center md:grid-cols-3 mb-5 border dark:border-neutral-400 rounded-sm p-2 py-6 shadow-md dark:bg-neutral-800">
                  <div className="w-[180px] md:w-[200px] mx-auto border dark:text-neutral-400 rounded-md shadow-md">
                    <div className="w-full h-full">
                      <Image src={cart.image} alt={cart.name} width={300} height={300}
                        className="w-full h-full object-cover object-center rounded-md" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h1 className="font-semibold text-xl">{cart.name}</h1>
                    <p>Color: <i><b>{cart.color}</b></i></p>
                    <p>Size: <i><b>{cart.size}</b></i></p>
                    <p>Amount :</p>
                    <div className="flex items-center gap-5">
                      <button className="bg-neutral-200 text-neutral-800 font-medium py-[2px] px-5 text-xl rounded-md hover:bg-neutral-400 transition-all duration-200"
                        onClick={() => decreaseAmount(i)}>-</button>
                      <p className="text-lg">{cart.amount}</p>
                      <button className="bg-neutral-200 text-neutral-800 font-medium py-[2px] px-5 text-xl rounded-md hover:bg-neutral-400 transition-all duration-200"
                        onClick={() => increaseAmount(i)}>+</button>
                    </div>
                    <p>
                      <FormatRupiah value={cart.price} />
                    </p>
                    <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition-all duration-200"
                      onClick={() => deleteProductFromCart(i)}>
                      Delete</button>
                  </div>
                  <DeliveryDate id={cart.id} index={i} />
                </section>
              )
            })}

        {/* order summary belo here */}
        <OrderCalculation />
      </div>
    </div>
  )
}