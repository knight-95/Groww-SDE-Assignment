import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Box as="header" bg="blue.500" p="4">
      <Flex align="center">
        <Image
          src="https://groww.in/groww-logo-270.png"
          alt="groww image"
          width="2rem"
        />
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="white" ml="2rem">
            Ecommerce Cart
          </Text>
        </Box>

        {/* Spacer to push items to the right */}
        <Spacer />
      </Flex>
    </Box>
  );
};
