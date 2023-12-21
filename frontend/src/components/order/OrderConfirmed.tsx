import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OrderConfirmed = () => {
  const router = useRouter();
  const finishOrder = () => {
    localStorage.removeItem("cart");
    window.location.reload();
    router.push("/");
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      borderWidth="1px"
      rounded="lg"
      // width={{ base: "90%", sm: "70%", md: "50%", lg: "40%" }}
      width="100%"
      padding={{ base: 4, sm: 6, md: 8 }}
      marginX="auto"
    >
      <Image
        src="https://cdn.dribbble.com/users/1896815/screenshots/6807790/scooter_ride_v1_2.gif"
        alt="gif"
        borderRadius="full"
        boxSize={{ base: "180px", sm: "130px", md: "120px", lg: "200px" }}
      />
      <Text
        marginTop="2rem"
        fontWeight="bold"
        fontSize={{ base: "1rem", sm: "1.25rem" }}
        textAlign="center"
      >
        Your Order has Been Successfully Placed!
      </Text>
      <Text marginTop="2rem" textAlign="center">
        Within moments you will receive a notification with the receipt of your
        purchase order.
      </Text>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        marginTop="2rem"
        onClick={finishOrder}
      >
        Finish Order
      </Button>
      <Button
        colorScheme="red"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        marginTop="1rem"
      >
        Download PDF Invoice
      </Button>
    </Box>
  );
};

export default OrderConfirmed;
