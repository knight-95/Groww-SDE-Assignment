import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.50" id="footer">
      <Flex
        mx="auto"
        maxW="screen-xl"
        gapY="8"
        gapX="10"
        px="4"
        py="10"
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Box maxW="sm">
          <Flex mb="6" h="12" alignItems="center" spaceX="2">
            <Text fontSize="2xl" fontWeight="bold">
              <Text
                as="h2"
                fontSize="xl"
                fontWeight="bold"
                bgGradient="linear(to-r, purple.600, pink.600, blue.600)"
                bgClip="text"
                textTransparent
              >
                Ecommerce Cart
              </Text>
            </Text>
          </Flex>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </Text>
        </Box>
        <Box>
          <Text mt="4" mb="2" fontWeight="medium" fontSize="xl" mb="4">
            Address
          </Text>
          <Text color="gray.500">
            Connaught Place,
            <br />
            45 Street,
            <br />
            New Delhi, India
          </Text>
        </Box>
        <Box>
          <Text mt="4" mb="2" fontWeight="medium" fontSize="xl" mb="4">
            Links
          </Text>
          <Flex as="nav" aria-label="Footer Navigation" direction="column">
            <ChakraLink
              href="#"
              _hover={{ color: "blue.600", textDecoration: "underline" }}
            >
              Pricing
            </ChakraLink>
            <ChakraLink
              href="#"
              _hover={{ color: "blue.600", textDecoration: "underline" }}
            >
              Demo
            </ChakraLink>
            <ChakraLink
              href="#"
              _hover={{ color: "blue.600", textDecoration: "underline" }}
            >
              Press
            </ChakraLink>
            <ChakraLink
              href="#"
              _hover={{ color: "blue.600", textDecoration: "underline" }}
            >
              Support Hub
            </ChakraLink>
            <ChakraLink
              href="#"
              _hover={{ color: "blue.600", textDecoration: "underline" }}
            >
              Contact
            </ChakraLink>
          </Flex>
        </Box>
        <Box px="2">
          <Text mt="4" mb="2" fontWeight="medium" fontSize="xl" mb="4">
            Subscribe to our Newsletter
          </Text>
          <Flex direction="column">
            <Box mb="4">
              <Input
                type="email"
                placeholder="Enter your email"
                focusBorderColor="blue.600"
                rounded="xl"
                bg="gray.200"
                px="4"
                size="lg"
              />
              <Button
                mt="2"
                rounded="xl"
                bg="blue.600"
                px="6"
                py="3"
                color="white"
                fontWeight="medium"
              >
                Subscribe
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box bg="gray.100">
        <Flex
          mx="auto"
          maxW="screen-xl"
          flexDir={{ base: "column", sm: "row" }}
          gapY="4"
          px="2"
          py="3"
          textAlign={{ base: "center", sm: "left" }}
          color="gray.500"
        >
          <Text>© 2023 EcommerceCart | All Rights Reserved</Text>
          <Flex>
            <ChakraLink href="#" _hover={{ textDecoration: "underline" }}>
              Privacy Policy
            </ChakraLink>
            <Text mx="1"> | </Text>
            <ChakraLink href="#" _hover={{ textDecoration: "underline" }}>
              Terms of Service
            </ChakraLink>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
