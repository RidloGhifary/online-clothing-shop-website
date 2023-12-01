'use client'

import { useState } from "react"

export default function ComponentProducts({ dataSize, price, id, name, image }) {
  const [selectedSize, setSelectedSize] = useState('XS')

  const handleSelectSize = (event) => {
    setSelectedSize(event.target.value)
  }

  const calculateUpdatedPrice = () => {
    let updatePrice = price

    switch (selectedSize) {
      case 'S':
        updatePrice += 5000
        break;
      case 'M':
        updatePrice += 10000
        break;
      case 'L':
        updatePrice += 15000
        break;
      case 'XL':
        updatePrice += 20000
        break;
      case 'XXL':
        updatePrice += 25000
        break;

      default:
        updatePrice = price
        break;
    }

    return updatePrice
  }

  let updateCart = []

  const handleAddButton = (props) => {
    console.log(props);
    //localStorage.setItem('cartItem')
  }

  return (
    <>
      <div className="my-3 flex justify-between items-center">
        <select id="size" className='border rounded-md px-2 pr-3'
          onChange={event => handleSelectSize(event)}
          value={selectedSize}>

          {dataSize?.map((size, index) => <option value={size} key={index}>{size}</option>)}

        </select>
        <p className='italic text-neutral-800'>Rp. {calculateUpdatedPrice()}</p>
      </div>
      <button
        onClick={() => handleAddButton({ id, name, image, selectedSize, calculateUpdatedPrice })}
        className='px-3 py-1 text-sm bg-neutral-900 text-neutral-100 cursor-pointer border rounded-lg hover:rounded-2xl'>
        Add to cart</button>
    </>
  )
}