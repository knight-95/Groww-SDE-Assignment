import { useEffect, useState } from "react";
import { fetchOrderDetails } from "@/api";
import { OrderDetails } from "@/interfaces";
import useCart from "@/(store)/store";

export const useOrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const hookCart = useCart();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("cart")) {
          const data = await fetchOrderDetails();
          localStorage.setItem("cart", JSON.stringify(data.products));

          // setOrderDetails(data);
          hookCart.setCart(data.products);
          hookCart.setPaymentMethods(data.paymentMethods);
        }else{
          hookCart.setCart(JSON.parse(localStorage.getItem("cart")!));
        }
      } catch (error: any) {
        setError(error.message || "Error fetching order details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("order details", orderDetails);
  return {
    orderDetails: orderDetails,
    loading: loading,
    error: error,
  };
};
