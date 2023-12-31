'use client'

import { getDayAfterFiveDays, getDayAfterTwoDays, getDayAfterSevenDays } from "@/app/utils/getDay"
import { useEffect, useState } from "react";

export default function DeliveryDate({ id, index }) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [dataInLocalStorage, setDataInLocalStorage] = useState([])

  useEffect(() => {
    const dataInLocalStorages = JSON.parse(localStorage.getItem('cartData')) || [];
    setDataInLocalStorage(dataInLocalStorages)
  }, [dataInLocalStorage])

  const handleOptionChange = (value, shippingCost) => {
    setSelectedOption(value);

    const updatedData = dataInLocalStorage.map(item => {
      if (item.id === id) {
        item.deliveryOption = {
          value,
          shippingCost
        };
      }
      return item;
    });
    localStorage.setItem('cartData', JSON.stringify(updatedData));
  };

  const isDeliveryOptionSelected = (value) => {
    return dataInLocalStorage[index]?.deliveryOption?.value === value;
  };

  return (
    <section className="col-span-2 md:col-span-1">
      <h1 className="font-bold text-lg text-neutral-800 dark:text-neutral-100">Choose delivery options : </h1>
      <div className="mt-3">
        <div className="flex gap-3 items-center mb-2">
          <input type="radio" id="daliveryDate"
            name={`delivery-option-` + id}
            required
            checked={!isDeliveryOptionSelected(getDayAfterFiveDays) && !isDeliveryOptionSelected(getDayAfterTwoDays)}
            onChange={() => handleOptionChange(getDayAfterSevenDays, 0)}
          />
          <div>
            <p className="font-semibold text-green-700 dark:text-green-500">{getDayAfterSevenDays}</p>
            <p className="text-neutral-500 -mt-1">FREE Shipping</p>
          </div>
        </div>
        <div className="flex gap-3 items-center mb-2">
          <input type="radio" id="daliveryDate"
            name={`delivery-option-` + id}
            required
            checked={isDeliveryOptionSelected(getDayAfterFiveDays)}
            onChange={() => handleOptionChange(getDayAfterFiveDays, 15000)}
          />
          <div>
            <p className="font-semibold text-green-700 dark:text-green-500">{getDayAfterFiveDays}</p>
            <p className="text-neutral-500 -mt-1">Rp. 15.000 - shipping</p>
          </div>
        </div>
        <div className="flex gap-3 items-center mb-2">
          <input type="radio" id="daliveryDate"
            name={`delivery-option-` + id}
            required
            checked={isDeliveryOptionSelected(getDayAfterTwoDays)}
            onChange={() => handleOptionChange(getDayAfterTwoDays, 25000)}
          />
          <div>
            <p className="font-semibold text-green-700 dark:text-green-500">{getDayAfterTwoDays}</p>
            <p className="text-neutral-500 -mt-1">Rp. 25.000 - shipping</p>
          </div>
        </div>
      </div>
    </section>
  )
}