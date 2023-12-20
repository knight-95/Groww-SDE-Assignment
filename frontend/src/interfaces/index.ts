export interface OrderDetails {
    products: {
      id: number;
      title: string;
      price: number;
      image: string;
      quantity: number;
    }[];
    paymentMethods: string[];
  }
  