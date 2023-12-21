import useCart from "@/(store)/store";
import { CartItemSummary } from "@/components/CartItemSummary";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Confirmation from "./confirmation";

const CheckoutPage = () => {
  const hookCart = useCart();
  // Check if localStorage is available
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  // Retrieve cart items from localStorage if available
  const cartItems = isLocalStorageAvailable
    ? JSON.parse(localStorage.getItem("cart") || "[]")
    : [];

  // Ensure this code runs on the client side
  useEffect(() => {
    if (isLocalStorageAvailable) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        // Perform any additional actions with parsedCart if needed
      }
    }
  }, [isLocalStorageAvailable]);

  return (
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
        <Stack spacing={{ base: "8", md: "10" }} flex="2" padding="8">
          {/* Order Status Section */}
          <Confirmation />
        </Stack>

        <Flex direction="column" align="center" flex="2">
          <Box>
            {/* Order Summary Section */}
            <Text fontSize="xl" fontWeight="bold">
              Order Summary
            </Text>
            <Text color="gray.400">Check your items and delivery address.</Text>
            <Box
              mt={8}
              rounded="lg"
              border="1px"
              bg="white"
              p={{ base: 2, sm: 6 }}
              borderRadius="lg"
            >
              {cartItems.map((item: any) => (
                <CartItemSummary key={item.id} {...item} />
              ))}
            </Box>
            <Flex direction="column">
              <Text mt={8} fontSize="lg" fontWeight="bold">
                Delivery Information:
              </Text>
              <Text mt={2} fontWeight="medium">
                Yash Gupta
              </Text>

              <Text>Indra Nagar Thatipur </Text>
              <Text>Indore, 452020</Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CheckoutPage;
