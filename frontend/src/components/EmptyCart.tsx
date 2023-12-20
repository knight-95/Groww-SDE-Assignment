import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <Flex direction="column" align="center" justify="center" >
      <Image
        src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
        alt="empty_cart"
        width="10rem"
        height="10rem"
      />
      <Text textAlign="center" fontWeight="bold" fontSize="1.5rem" mt="2">
        Your Cart is Empty
      </Text>
      <Text textAlign="center">Add something to make me happy :)</Text>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="sm"
        rightIcon={<FaArrowRight />}
        marginTop="1.5rem"
      >
        Reload Cart
      </Button>
    </Flex>
  );
};

export default EmptyCart;
