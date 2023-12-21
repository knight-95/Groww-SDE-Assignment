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
  subTotal?: any;
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

export const CartOrderSummary = ({ subTotal }: any) => {
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponCodeVisible, setIsCouponCodeVisible] =
    useState<boolean>(false);

  // Initialize shippingCharges with an initial value
  const [shippingCharges, setShippingCharges] = useState<number>(
    subTotal < 499 ? 199 : 0
  );

  const applyCoupon = (code: string) => {
    let appliedDiscount = 0;

    switch (code) {
      case "DISCOUNT10":
        appliedDiscount = 10;
        setAppliedCoupon("DISCOUNT10");
        break;
      case "DISCOUNT15":
        appliedDiscount = 15;
        setAppliedCoupon("DISCOUNT15");
        break;
      default:
        setAppliedCoupon("");
        setDiscount(0);
        break;
    }
    // Apply discount to total if a valid coupon is provided
    if (appliedDiscount > 0) {
      const totalValue = subTotal; // Replace with your actual total value
      const calculatedDiscount = (appliedDiscount / 100) * totalValue;
      setDiscount(Math.min(calculatedDiscount, 1000)); // Applies a max of 1000 rupees
    }
  };

  const handleShowCouponCode = () => {
    setIsCouponCodeVisible(!isCouponCodeVisible);
  };

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(subTotal)} />
        <>
          <OrderSummaryItem
            label="Shipping Charges"
            value={subTotal < 499 ? formatPrice(199) : undefined}
          >
            {subTotal < 499 && (
              <Link href="#" textDecor="underline">
                Calculate shipping
              </Link>
            )}
            {subTotal > 499 && (
              <Text textColor="green.500" fontWeight="bold">
                FREE
              </Text>
            )}
          </OrderSummaryItem>
        </>
        <OrderSummaryItem label="Coupon Code">
          <Link onClick={handleShowCouponCode} textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        {isCouponCodeVisible && (
          <>
            <Flex>
              <Input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              />
              <Button
                ml="2"
                onClick={() => applyCoupon(couponCode)}
                colorScheme="blue"
              >
                Apply
              </Button>
            </Flex>
            {appliedCoupon && (
              <Text mt="0" color="green.500">
                Coupon {appliedCoupon} applied successfully. You have saved ₹
                {formatPrice(discount)}
              </Text>
            )}

            {appliedCoupon === "" && discount === 0 && (
              <Text mt="0" color="red.500">
                Please enter a valid coupon.
              </Text>
            )}
          </>
        )}
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {formatPrice(subTotal+(shippingCharges-discount))}
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
