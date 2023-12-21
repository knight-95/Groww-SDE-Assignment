import OrderConfirmed from "@/components/order/OrderConfirmed";
import OrderFailed from "@/components/order/OrderFailed";
import { Box } from "@chakra-ui/react";
import React from "react";

const Confirmation: React.FC = () => {
  const renderOrderConfirmed = () => {
    // Generate a random number between 0 and 1
    const randomValue = Math.random();

    // Set the probability threshold (80% for OrderConfirmed)
    const probabilityThreshold = 0.8;

    // Decide which component to render based on the random number
    return randomValue < probabilityThreshold ? (
      <OrderConfirmed />
    ) : (
      <OrderFailed />
    );
  };

  return <Box padding={8}>{renderOrderConfirmed()}</Box>;
};

export default Confirmation;
