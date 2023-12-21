import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OrderFailed = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      borderWidth="1px"
      rounded="lg"
      width={{ base: "90%", sm: "70%", md: "50%", lg: "40%" }}
      padding={{ base: 4, sm: 6, md: 8 }}
      marginX="auto"
    >
      <Image
        src="https://jumeirahroyal.com/wp-content/uploads/d7e50cb89c.png"
        alt="gif"
        borderRadius="full"
        boxSize={{ base: "180px", sm: "130px", md: "120px", lg: "200px" }}
      />
      <Text
        fontWeight="bold"
        fontSize={{ base: "1rem", sm: "1.25rem" }}
        textAlign="center"
        color="red.500"
      >
        Transaction Failed
      </Text>
      <Text marginTop="2rem" textAlign="center">
        Your payment was not successfully processed. Please try again or contact
        our Customer Care
      </Text>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        marginTop="2rem"
      >
        Back to Payments
      </Button>
    </Box>
  );
};

export default OrderFailed;
