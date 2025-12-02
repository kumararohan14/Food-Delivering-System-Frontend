import React from "react";
import Divider from "@mui/material/Divider";
import CartItem from "./cartItem";

function Cart() {
  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
            <CartItem />
            <CartItem />
        </section>

        <Divider />
      </main>
    </div>
  );
}

export default Cart;
