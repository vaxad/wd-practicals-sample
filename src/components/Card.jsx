import React from 'react'

export default function Card({item}) {
  return (
    <div className=' flex bg-zinc-950 rounded-lg text-slate-50 border border-zinc-950 flex-col overflow-clip '>
        <img className='h-[200px] w-full' src={item.images[0]} alt={item.title} />
        <section className=' p-3 flex flex-col gap-2'>
            <h1 className=' text-lg font-bold'>{item.title}</h1>
            <p className=' text-xs italic text-slate-500'>{item.description}</p>
            <article className=' flex flex-row justify-between items-center'>
                <h2>Rating: {item.rating}</h2>
                <h2>Price: {item.price}</h2>
            </article>
            <article className=' flex flex-row justify-between items-center'>
                <h2>Brand: {item.brand}</h2>
                <h2>Category: {item.category}</h2>
            </article>
            <article className=' flex flex-row justify-between items-center'>
                <h2>Discount: {item.discountPercentage}</h2>
                <h2>Stock: {item.stock}</h2>
            </article>
        </section>
    </div>
  )
}
