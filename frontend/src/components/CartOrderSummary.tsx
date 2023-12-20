import {
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useState } from "react";

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
  totalValue?: any;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = ({ totalValue }: any) => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponCodeVisible, setIsCouponCodeVisible] =
    useState<boolean>(false);
  const applyCoupon = (code: string) => {
    // TODO: Implement coupon validation logic here
    // For simplicity, let's assume the coupon code is valid and provides a 10% discount
    const discountPercentage = 10;
    const discountedTotal = totalValue * ((100 - discountPercentage) / 100);
    // Update the total value with the discounted amount
    // setTotalValue(discountedTotal);
  };

  const handleShowCouponCode = () => {
    setIsCouponCodeVisible(!isCouponCodeVisible);
  };

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(totalValue)} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link onClick={handleShowCouponCode} textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        {isCouponCodeVisible && (
          <Stack
            spacing="8"
            borderWidth="1px"
            rounded="lg"
            padding="8"
            width="full"
          >
            <OrderSummaryItem label="Coupon Code">
              <Flex>
                <Input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button ml="2" onClick={() => applyCoupon(couponCode)}>
                  Apply
                </Button>
              </Flex>
            </OrderSummaryItem>
          </Stack>
        )}
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(totalValue)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        Checkout
      </Button>
    </Stack>
  );
};
