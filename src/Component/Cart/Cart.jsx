import React from "react";
import Divider from "@mui/material/Divider";
import CartItem from "./cartItem";
import AddressCart from "./AddressCart";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { Card, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Form, Formik, Field, validateYupSchema } from "formik";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
function Cart() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const createOrderUsingSelectedAddress = () => {};
  const hadleOpenAddNewAddressModal = () => {
    setOpen(true);
  };
  const handleSubmit = (values) => {};
  // const validationSchema = Yup.object.shape({
  //   streetAddress: Yup.string().required("Street address is required"),
  //   state: Yup.string().required("State is required"),
  //   pincode: Yup.required("pincode is required"),
  //   city: Yup.string().required("ciry is required"),
  // });
  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          <CartItem />
          <CartItem />
          <div className="billlDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>Rs500</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Deliver Fee</p>
                <p>Rs300</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>Rs100</p>
              </div>
              <Divider />
            </div>
            <div className="flex justify-between text-gray-400">
              <p>Total pay</p>
              <p>Rs2000</p>
            </div>
          </div>
        </section>

        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose delivery Address
            </h1>
            <div className="flex gap-5 flex-wrap justify-center">
              <AddressCart
                showButton={true}
                handleSelectAddress={createOrderUsingSelectedAddress}
              />
              <AddressCart showButton={true} />
              <AddressCart showButton={true} />
              <AddressCart showButton={true} />
              <Card className="flex gap-5 w-64 p-5">
                <AddLocationIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={hadleOpenAddNewAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <Item>
                    <Field 
                    as={TextField}
                    fullWidth 
                    label="street Address"
                    name="fistreetAddress" 
                     />
                  </Item>
                </Grid>
                <Grid size={12}>
                  <Item></Item>
                </Grid>
                <Grid size={12}>
                  <Item>
                   <Field 
                    as={TextField}
                    fullWidth 
                    label="state"
                    name="state" 
                     />
                  </Item>
                </Grid>
                <Grid size={12}>
                  <Item>
                    <Field 
                    as={TextField}
                    fullWidth 
                    label="pincode"
                    name="pincode" 
                     />
                  </Item>
                  
                </Grid>
                <Grid size={12}>
                  <Item>
                    <Field 
                    as={TextField}
                    fullWidth 
                    label="city"
                    name="city" 
                     />
                      <Field
   name="firstName"
   render={({ field /* { name, value, onChange, onBlur } */ }) => (
     <input {...field} type="text" placeholder="firstName" />
   )}
 />
                  </Item>
                  
                </Grid>
                
              </Grid>
              <Button
                variant="contained"
                fullWidth
                onClick={hadleOpenAddNewAddressModal}
              >
                Add
              </Button>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default Cart;
