import React from "react";
import { Grid } from "@mui/material";
import restaurantImg from "../../assets/3394.jpg";
import restaurantImg2 from "../../assets/R2.jpg";
import restaurantImg3 from "../../assets/R3.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Divider from "@mui/material/Divider";

function RestaurantDetails() {
  return (
    <div className="px-5 lg:px-20">
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
        <h3 className="text-gray-500 py-2 mt-10">
          Home / india / indian fast food / 3
        </h3>

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
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Srilanka Fast Food</h1>
          <p className="text-gray-500 mt-5">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem inventore iste obcaecati perferendis tempora velit vel
              exercitationem debitis sapiente. Voluptate ab similique tempore
              ratione nam assumenda dolore iure totam excepturi.
            </span>
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex item-center gap-3">
              <LocationOnIcon />
              <span>123 Main Street, Colombo, Sri Lanka</span>
            </p>
            <p className="text-gray-500 flex item-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-sun : 10:00 am - 10:00 pm(Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        {/* Sidebar / Filter Section */}
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                
              </Typography>
            </div>
          </div>
        </div>

        {/* Main Content / Menu Section */}
        <div className="space-y-5 lg:w-[80%] lg:pl-10">menu</div>
      </section>
    </div>
  );
}

export default RestaurantDetails;
