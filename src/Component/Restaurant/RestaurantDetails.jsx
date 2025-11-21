import React from 'react'
import { Grid } from '@mui/material'
import restaurantImg from '../../assets/3394.jpg'
import restaurantImg2 from '../../assets/R2.jpg'
import restaurantImg3 from '../../assets/R3.png'

function RestaurantDetails() {
  return (
    <div className='px-5 lg:px-20'>
    {/* <section>
        <h3>Home / india / indian fast food / 3</h3>
        <Grid container spacing={2}>
            <Grid item xs={12} >
               <img className='object-cover w-800 h-[40vh]' src={restaurantImg} alt="restaurant" />
            </Grid>
           
            <Grid item xs={12} lg={6} style={{ background: 'red' }} >
               <img className='object-cover  h-[40vh]' src={restaurantImg3} alt="restaurant" />
            </Grid>
             <Grid item xs={12} lg={6}>
               <img className='object-cover w-200  h-[40vh]' src={restaurantImg2} alt="restaurant" />
            </Grid>
        </Grid>
    </section> */}

    <section className="w-full">
  <h3 className='text-gray-500 px-5 mt-10'>Home / india / indian fast food / 3</h3>

  {/* First row - full width */}
  <div className="w-full">
    <img
      className="w-full h-[40vh] object-cover"
      src={restaurantImg}
      alt="restaurant"
    />
  </div>

  {/* Second row - two columns */}
  <div className="max-w-[1200px]  grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
    <div className="w-full h-[40vh] bg-red-500">
      <img
        className="w-full h-full object-cover"
        src={restaurantImg3}
        alt="restaurant"
      />
    </div>
    <div className="w-full h-[40vh]">
      <img
        className="w-full h-full object-cover"
        src={restaurantImg2}
        alt="restaurant"
      />
    </div>
  </div>
</section>


    </div>
  )
}

export default RestaurantDetails
