import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';

function MenuCard() {
  //     const ingredients=[
  //     {
  //         category: "Nuts & seeds",
  //         ingredients: "Cashews"
  //     },
  //     {
  //         category: "Protein",
  //         ingredients: "Protein"
  //     },
  //     {
  //         category: "Protein",
  //         ingredients: "Bacon strips"
  //     }
  // ]
  const handleCheckBocChange = (item) => {
    console.log(item);
  }
  const demo = [
    {
      category: "Nuts & seeds",
      ingredients: ["Cashews"],
    },
    {
      category: "Protein",
      ingredients: ["Ground beef", "Bacon strips"],
    },
  ];
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex item-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg"
                alt=""
              />
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">Burger</p>
                <p>Rs499</p>
                <p className="text-gray-400">nice food</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="lg:flex flex-rap gap-10">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((ingr) => (
                    <FormControlLabel control={<Checkbox onChange={()=>handleCheckBocChange(item)}/>} label={ingr} />
                  ))}
                </FormGroup>
              </div>
            ))}
            
          </div>
          <div>
              <Button variant="contained" disabled={false}>{true ? "Add to Cart" : "Out Of Stock"}</Button>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MenuCard;
