"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartNavbar from "@/components/navbar/CartNavbar";
import OrderCalculation from "./_components/orderCalculation";
import DeliveryDate from "./_components/deliveryDate";
import RupiahFormat from "@/utils/rupiahFormat";

export default function Cart() {
  const [updateCart, setUpdateCart] = useState([]);

  useEffect(() => {
    let updateCart = JSON.parse(localStorage.getItem("cartData"));
    setUpdateCart(updateCart);
  }, [updateCart]);

  const saveStorage = () => {
    localStorage.setItem("cartData", JSON.stringify(updateCart));
  };

  const increaseAmount = (index) => {
    const updateCarts = [...updateCart];
    if (updateCarts[index].amount < 100) {
      updateCarts[index].amount += 1;

      switch (updateCart[index].size) {
        case "XS":
          updateCart[index].price += 24000;
          break;
        case "S":
          updateCart[index].price += 29000;
          break;
        case "M":
          updateCart[index].price += 34000;
          break;
        case "L":
          updateCart[index].price += 39000;
          break;
        case "XL":
          updateCart[index].price += 44000;
          break;
        case "XXL":
          updateCart[index].price += 49000;
          break;

        default:
          updateCart[index].price = updateCart[index].price;
          break;
      }
    } else {
      return;
    }
    setUpdateCart(updateCarts);
    saveStorage();
  };

  const decreaseAmount = (index) => {
    const updateCarts = [...updateCart];
    if (updateCarts[index].amount > 1) {
      updateCarts[index].amount -= 1;
      switch (updateCart[index].size) {
        case "XS":
          updateCart[index].price -= 24000;
          break;
        case "S":
          updateCart[index].price -= 29000;
          break;
        case "M":
          updateCart[index].price -= 34000;
          break;
        case "L":
          updateCart[index].price -= 39000;
          break;
        case "XL":
          updateCart[index].price -= 44000;
          break;
        case "XXL":
          updateCart[index].price -= 49000;
          break;

        default:
          updateCart[index].price = updateCart[index].price;
          break;
      }
    } else {
      return;
    }
    setUpdateCart(updateCarts);
    saveStorage();
  };

  const deleteProductFromCart = (index) => {
    updateCart.splice(index, 1);
    saveStorage();
  };

  return (
    <div className="relative mx-auto h-full min-h-[100vh] w-full max-w-[900px] bg-white dark:bg-neutral-800">
      <CartNavbar />
      <div className="mx-auto w-full px-10 pt-8 md:px-20">
        {updateCart?.length === 0 ? (
          <div className="mb-20">
            <h1 className="mb-3 text-2xl font-semibold text-neutral-800">
              Looking for something?
            </h1>
            <Link
              href="/#products"
              className="rounded-lg bg-neutral-800 px-5 py-2 text-neutral-100 shadow-md hover:bg-neutral-700"
            >
              Order now
            </Link>
          </div>
        ) : (
          updateCart?.map((cart, i) => (
            <section
              key={i}
              className="mb-5 grid w-full grid-cols-2 items-center gap-4 rounded-sm border p-2 py-6 shadow-md dark:border-neutral-400 dark:bg-neutral-800 md:grid-cols-3 md:gap-0"
            >
              <div className="mx-auto w-[180px] rounded-md border shadow-md dark:text-neutral-400 md:w-[200px]">
                <div className="h-full w-full">
                  <Image
                    src={cart.image}
                    alt={cart.name}
                    width={300}
                    height={300}
                    className="h-full w-full rounded-md object-cover object-center"
                  />
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-xl font-semibold">{cart.name}</h1>
                <p>
                  Color:{" "}
                  <i>
                    <b>{cart.color}</b>
                  </i>
                </p>
                <p>
                  Size:{" "}
                  <i>
                    <b>{cart.size}</b>
                  </i>
                </p>
                <p>Amount :</p>
                <div className="flex items-center gap-5">
                  <button
                    className="rounded-md bg-neutral-200 px-5 py-[2px] text-xl font-medium text-neutral-800 transition-all duration-200 hover:bg-neutral-400"
                    onClick={() => decreaseAmount(i)}
                  >
                    -
                  </button>
                  <p className="text-lg">{cart.amount}</p>
                  <button
                    className="rounded-md bg-neutral-200 px-5 py-[2px] text-xl font-medium text-neutral-800 transition-all duration-200 hover:bg-neutral-400"
                    onClick={() => increaseAmount(i)}
                  >
                    +
                  </button>
                </div>
                <p>{RupiahFormat(cart.price)}</p>
                <button
                  className="mt-2 rounded-md bg-green-500 px-3 py-1 text-white transition-all duration-200 hover:bg-green-600"
                  onClick={() => deleteProductFromCart(i)}
                >
                  Delete
                </button>
              </div>
              <DeliveryDate id={cart.id} index={i} />
            </section>
          ))
        )}

        <OrderCalculation />
      </div>
    </div>
  );
}
