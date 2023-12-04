'use client'

import { useEffect, useState } from "react";
import CartNavbar from "../navbar/cartNavbar";
import Image from "next/image";
import OrderCalculation from "../orderCalculation/orderCalculation";
import DeliveryDate from "../compents/deliveryDate/deliveryDate";

export default function cartItem() {
  const [updateCart, setUpdateCart] = useState([])

  useEffect(() => {
    let updateCart = JSON.parse(localStorage.getItem('cartData'));
    setUpdateCart(updateCart)
  }, [updateCart])

  const saveStorage = () => {
    localStorage.setItem('cartData', JSON.stringify(updateCart))
  }

  const increaseAmount = (index) => {
    const updateCarts = [...updateCart]
    if (updateCarts[index].amount < 100) {
      updateCarts[index].amount += 1

      switch (updateCart[index].size) {
        case 'XS':
          updateCart[index].price += 24
          break;
        case 'S':
          updateCart[index].price += 29
          break;
        case 'M':
          updateCart[index].price += 34
          break;
        case 'L':
          updateCart[index].price += 39
          break;
        case 'XL':
          updateCart[index].price += 44
          break;
        case 'XXL':
          updateCart[index].price += 49
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
          updateCart[index].price -= 24
          break;
        case 'S':
          updateCart[index].price -= 29
          break;
        case 'M':
          updateCart[index].price -= 34
          break;
        case 'L':
          updateCart[index].price -= 39
          break;
        case 'XL':
          updateCart[index].price -= 44
          break;
        case 'XXL':
          updateCart[index].price -= 49
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
    <>
      <CartNavbar />
      <div className="w-full min-h-full max-w-[900px] mx-auto px-10 md:px-20 pt-8">
        {/* render cart product below here */}
        {updateCart?.map((cart, i) => {
          return (
            <section className="w-full grid grid-cols-2 md:grid-cols-3 mb-5 border rounded-sm p-2 shadow-md">
              <div className="w-[180px] md:w-[200px] mx-auto border rounded-md shadow-md bg-white">
                <div className="w-full h-full">
                  <Image src={cart.image} alt={cart.name} width={300} height={300}
                    className="w-full h-full object-cover object-center" />
                </div>
              </div>
              <div className="text-left bg-white">
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
                <p>Rp. {cart.price}.000</p>
                <button className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-all duration-200"
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
    </>
  )
}