import OrderConfirmed from "@/components/order/OrderConfirmed";
import OrderFailed from "@/components/order/OrderFailed";
import { Box } from "@chakra-ui/react";
import React from "react";

const confirmation = () => {
  return (
    <Box padding={8}>
      {/* <OrderConfirmed /> */}
      <OrderFailed/>
    </Box>
  );
};

export default confirmation;
