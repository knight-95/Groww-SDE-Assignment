import { useEffect, useState } from 'react';
import { fetchOrderDetails } from '@/api';
import { OrderDetails } from '@/interfaces';

export const useOrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrderDetails();
        setOrderDetails(data);
      } catch (error:any) {
        setError(error.message || 'Error fetching order details');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { orderDetails, loading, error };
};
