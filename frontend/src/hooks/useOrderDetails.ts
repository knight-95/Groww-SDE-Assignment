import { useEffect, useState } from "react";
import { fetchOrderDetails } from "@/api";
import { OrderDetails } from "@/interfaces";

export const useOrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrderDetails();
        setOrderDetails(data);
      } catch (error: any) {
        setError(error.message || "Error fetching order details");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("order details", orderDetails);
  return { orderDetails: orderDetails, loading: loading, error: error };
};
