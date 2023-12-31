import {
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { useState } from "react";
import QuantitySelect from "./QuantitySelect";

type CartItemProps = {
  isGiftWrapping?: boolean;
  title: string;
  description?: string;
  quantity: number;
  price: number;
  currency?: string;
  image: string;
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: (index:any) => void;
};

export const CartItem = (props: CartItemProps) => {
  const {
    isGiftWrapping,
    title: title,
    description,
    quantity,
    image: imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = props;

  const handleDeleteClick = (index: any) => {
    // Call the parent component's delete handler to remove the item
    onClickDelete?.(index);
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        title={title}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
        marginLeft="2rem"
      >
        <QuantitySelect
          defaultQuantity={quantity}
          onChangeQuantity={(newQuantity) => {
            onChangeQuantity?.(newQuantity);
          }}
        />
        <PriceTag price={price} currency="INR" />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={handleDeleteClick} // Use the custom handler to delete entire item
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          defaultQuantity={quantity}
          onChangeQuantity={(newQuantity) => {
            onChangeQuantity?.(newQuantity);
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
