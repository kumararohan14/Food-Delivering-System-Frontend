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

        <Divider orientation="vertical" flexItem/>
        <section className="lg:w-[70%]">

        </section>
      </main>
    </div>
  );
}

export default Cart;
