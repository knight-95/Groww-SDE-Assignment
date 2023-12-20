import { Button, HStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

interface QuantitySelectProps {
  defaultQuantity?: number;
  onChangeQuantity?: (quantity: number) => void;
}

const QuantitySelect = ({
  defaultQuantity = 1,
  onChangeQuantity,
}: QuantitySelectProps) => {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const toast = useToast(); // Initialize the toast function

  const handleIncrease = () => {
    const newQuantity = Math.min(quantity + 1, 20); // Limit to a maximum of 20
    setQuantity(newQuantity);
    if (onChangeQuantity) {
      onChangeQuantity(newQuantity);
    }

    // Show toast when maximum cart value is reached
    if (newQuantity === 20) {
      showToast("Maximum cart value reached!", "info");
    }
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 1); // Limit to a minimum of 1
    setQuantity(newQuantity);
    if (onChangeQuantity) {
      onChangeQuantity(newQuantity);
    }

    // Show toast when minimum cart value is reached
    if (newQuantity === 1) {
      showToast("Minimum cart value reached!", "info");
    }
  };

  // Function to show toast
  const showToast = (
    message: string,
    status: "success" | "error" | "warning" | "info"
  ) => {
    toast({
      title: message,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <HStack>
      <Button
        onClick={handleDecrease}
        disabled={quantity === 1}
        variant="outline"
      >
        -
      </Button>
      <div>{quantity}</div>
      <Button
        onClick={handleIncrease}
        disabled={quantity === 20}
        variant="outline"
      >
        +
      </Button>
    </HStack>
  );
};

export default QuantitySelect;
