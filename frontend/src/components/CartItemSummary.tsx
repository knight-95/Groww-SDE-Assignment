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
  onClickDelete?: (index: any) => void;
};

export const CartItemSummary = (props: CartItemProps) => {
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
  // Trim the title to a maximum of 25 characters
  const truncatedTitle = title.length > 25 ? `${title.slice(0, 25)}...` : title;
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        title={truncatedTitle}
        // description={description}
        image={imageUrl}
        isGiftWrapping={false}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
        marginLeft="2rem"
      >
        <Text>Qty. {quantity}</Text>
        <PriceTag price={price} currency="INR" />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Text>Qty. {quantity}</Text>
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
