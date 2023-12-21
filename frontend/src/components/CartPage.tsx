import useCart from "@/(store)/store";
import { useOrderDetails } from "@/hooks/useOrderDetails";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  useColorModeValue as mode
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import DeliveryDetails from "./DeliveryDetails";
import EmptyCart from "./EmptyCart";
import Loader from "./Loader";

const CartPage = () => {
  const { orderDetails, loading, error } = useOrderDetails();

  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  const hookCart = useCart();

  // Function to calculate the total value based on products in the cart
  const calculateTotalValue = () => {
    return hookCart.cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  const subTotal = calculateTotalValue();

  const totalCartItem = () => {
    return hookCart.cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };
  const totalCartItems = totalCartItem();

  // Handling loading and error states
  if (loading) {
    return <Loader />;
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
              {hookCart.cart.map((product: any, index: any) => (
                <CartItem
                  key={product.id}
                  onClickDelete={(index: any) => {
                    hookCart.removeItemFromCart(index);
                  }}
                  {...product}
                  onChangeQuantity={(productId: any, quantity: number) => {
                    let existingCart = hookCart.cart;
                    console.log("existing carts", existingCart);
                    const product = existingCart.find(
                      (p) => p.id === productId
                    );

                    existingCart.find((p) => p.id === productId);

                    hookCart.setCart(existingCart);
                  }}
                />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary
              subTotal={subTotal}
              isCartEmpty={hookCart.cart.length > 0 ? false : true}
            />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")} onClick={reloadCart}>
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
