import React, { useState } from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import restaurantImg from "../../assets/food.jpg";
import restaurantImg2 from "../../assets/food.jpg";
import restaurantImg3 from "../../assets/food.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Divider from "@mui/material/Divider";
import { FormControl } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import BadList from "./BadList";
function RestaurantDetails() {
  const [foodType, setFoodType] = useState("all");
  const [category, setCategory] = useState("");

  const handleFilter = (e) => {
    const { name, value } = e.target;
    console.log(value, name);
    if (name === "food_type") {
      setFoodType(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };
  const categories = [
    "pizza", 
    "biryani", 
    "burger",
     "chiken", 
     "rice"];
  const foodTypes = [
    { label: "All", value: "all" },
    { label: "Vegetarian only", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non_vegetarian" },
    { label: "Seasonal", value: "seasonal" },
  ];
  return (
    <div className="px-5 lg:px-20">
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
        <div className="max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-2 mt-2">
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
               Food
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                 
                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}> {/* ai methona value kiyana eka use karala thiyenen */}
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}//menna methana podi prashnayak thiyenawa eka solve karaganna ona
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
               </RadioGroup>
              </FormControl>
              
            </div>
             <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
               Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                 
                <RadioGroup onChange={handleFilter} name="category" value={category}> {/* ai methona value kiyana eka use karala thiyenen */}
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}//menna methana podi prashnayak thiyenawa eka solve karaganna ona
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
               </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        {/* Main Content / Menu Section */}
        <div className="space-y-5 lg:w-[80%] lg:pl-10">Menu Items</div>
      </section>
    </div>
  );
}

export default RestaurantDetails;
