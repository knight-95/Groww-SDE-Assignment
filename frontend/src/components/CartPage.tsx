import React from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Card,
  CardHeader,
  CardBody,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { CartOrderSummary } from "./CartOrderSummary";
import { useOrderDetails } from "@/hooks/useOrderDetails";
import Image from "next/image";
import { CartItem } from "./CartItem";
import DeliveryDetails from "./DeliveryDetails";
import useCart from "@/(store)/store";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const { orderDetails, loading, error } = useOrderDetails();

  // const { products, paymentMethods } = orderDetails || {
  //   products: [],
  //   paymentMethods: [],
  // };

  const hookCart = useCart();

  // Function to calculate the total value based on products in the cart
  const calculateTotalValue = () => {
    return hookCart.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const totalValue = calculateTotalValue();

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
          <Stack
            spacing={{ base: "8", md: "10" }}
            flex="2"
            borderWidth="1px"
            rounded="lg"
            padding="8"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({hookCart.cart.length}{" "}
              {hookCart.cart.length > 1 ? "Items" : "Item"})
            </Heading>

            {hookCart.cart.length < 1 && <EmptyCart />}

            <Stack spacing="6">
              {hookCart.cart.map((product: any) => (
                <CartItem
                  key={product.id}
                  {...product}
                  onChangeQuantity={() => {}}
                />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary totalValue={totalValue} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>

        {hookCart.cart.length > 0 && (
          <DeliveryDetails onSubmit={() => console.log("Form submitted")} />
        )}
      </Box>
    </>
  );
};

export default CartPage;
