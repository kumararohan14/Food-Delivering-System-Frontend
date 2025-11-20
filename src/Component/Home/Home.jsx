import React from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'
import RestauranCard from '../Restaurant/RestauranCard'
function Home() {
  const restaurants = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='pb-10'>
      <section className='banner -z-50 relative flex flex-col justify-center items-center'>
        
        <div className='w-[50vw] z-10 text-center'>
            <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Zosh Food</p>
            <p className='z-10 text-gray-300 text-xl lg:text-4-xl sans-serif'>Taste the Convenience: Food, Fast and Delivered.</p> 
        </div>
        <div className="cover absolute top-0 left-0 right-0">
            
        </div>
        <div className="fadout">

        </div>

      </section>
      <section className=''>
        <p className='text-2xl font-semibold text-gray-600 py-3 pb-10 '>Top meals</p>
        <MultiItemCarousel /> 
      </section>
      <section className='px-5 lg:py-10 lg:px-20 pb-10'>
          <h1 className='text-2xl font-semibold text-gray-400 py-3'>
              Order From Our Handpicked Favorites
          </h1>

          <div className='flex flex-wrap justify-around gap-5'>
            {
              restaurants.map((item) => 
                 <RestauranCard />
            )
            }
             
        </div>
      </section>
    </div>
  )
}

export default Home