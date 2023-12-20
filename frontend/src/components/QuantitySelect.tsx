import { Button, HStack } from '@chakra-ui/react';
import { useState } from 'react';

interface QuantitySelectProps {
  defaultQuantity?: number;
  onChangeQuantity?: (quantity: number) => void;
}

const QuantitySelect = ({ defaultQuantity = 1, onChangeQuantity }: QuantitySelectProps) => {
  const [quantity, setQuantity] = useState(defaultQuantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onChangeQuantity) {
      onChangeQuantity(newQuantity);
    }
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
    if (onChangeQuantity) {
      onChangeQuantity(newQuantity);
    }
  };

  return (
    <HStack>
      <Button onClick={handleDecrease} disabled={quantity === 1} variant="outline">
        -
      </Button>
      <div>{quantity}</div>
      <Button onClick={handleIncrease} variant="outline">
        +
      </Button>
    </HStack>
  );
};

export default QuantitySelect;
