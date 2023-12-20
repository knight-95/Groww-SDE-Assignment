import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartOrderSummary } from "./CartOrderSummary";
import { cartData } from "./_data";
import { useOrderDetails } from "@/hooks/useOrderDetails";
import Image from "next/image";
import { CartItem } from "./CartItem";

const CartPage = () => {
  const { orderDetails, loading, error } = useOrderDetails();
  const { products, paymentMethods } = orderDetails || {
    products: [],
    paymentMethods: [],
  };
  
  // Handling loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (3 items)
            </Heading>

            <Stack spacing="6">
              {products.map((product) => (
                <CartItem key={product.id} {...product} />
              ))}

              {products.map((product) => (
                <div key={product.id}>
                  <p>{product.title}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Price: ₹{product.price}</p>
                  {/* <Image src={product.image} alt={product.title} /> */}
                </div>
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default CartPage;
