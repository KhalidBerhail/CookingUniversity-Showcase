
import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { useParams } from "react-router-dom";

export default function PlaceOrder() {
  
    const {id} = useParams();
    return (
      <div>
        <CheckoutForm productId={id}/>
      </div>
    )
  }

