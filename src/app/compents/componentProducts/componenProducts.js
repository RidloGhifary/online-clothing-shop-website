'use client'

import { useState, useEffect } from "react"

export default function ComponentProducts({ dataSize, price, id, name, image, color }) {
  const [selectedSize, setSelectedSize] = useState('XS')

  const handleSelectSize = (event) => {
    setSelectedSize(event.target.value)
  }

  const calculateUpdatedPrice = () => {
    let updatePrice = price

    switch (selectedSize) {
      case 'S':
        updatePrice += 5
        break;
      case 'M':
        updatePrice += 10
        break;
      case 'L':
        updatePrice += 15
        break;
      case 'XL':
        updatePrice += 20
        break;
      case 'XXL':
        updatePrice += 25
        break;

      default:
        updatePrice = price
        break;
    }

    return updatePrice
  }

  let updateCart = JSON.parse(localStorage.getItem('cartData'));

  if (!updateCart) {
    updateCart = []
  }

  const saveStorage = () => {
    localStorage.setItem('cartData', JSON.stringify(updateCart))
  }

  const handleAddButton = (props) => {
    const price = calculateUpdatedPrice()
    updateCart.push({
      id: props.id,
      name: props.name,
      image: props.image,
      size: props.selectedSize,
      price,
      color: props.color
    })

    saveStorage()
  }

  return (
    <>
      <div className="my-3 flex justify-between items-center">
        <select id="size" className='border rounded-md px-2 pr-3'
          onChange={event => handleSelectSize(event)}
          value={selectedSize}>

          {dataSize?.map((size, index) => <option value={size} key={index}>{size}</option>)}

        </select>
        <p className='italic text-neutral-800'>{calculateUpdatedPrice()}<i>k</i></p>
      </div>
      <button
        onClick={() => handleAddButton({ id, name, image, selectedSize, color })}
        className='px-3 py-1 text-sm bg-neutral-900 text-neutral-100 cursor-pointer border rounded-lg hover:rounded-2xl'>
        Add to cart</button>
    </>
  )
}