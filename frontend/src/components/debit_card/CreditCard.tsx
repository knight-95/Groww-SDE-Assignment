import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import {
  Box,
  Flex,
  Image,
  Input,
  Select,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

interface FormData {
  name: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  securityCode: string;
}

const CreditCardForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    securityCode: "",
  });

  const toast = useToast();
  const router = useRouter();
  const validateCreditCard = (cardNumber: string): boolean => {
    // For simplicity, we'll just check if the number is numeric and has 16 digits
    return /^\d{16}$/.test(cardNumber);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = () => {
    // Validate credit card number
    if (!validateCreditCard(formData.cardNumber)) {
      toast({
        title: "Invalid Details",
        description: "Please enter valid details",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Add additional validation checks as needed

    // Payment successful
    toast({
      title: "Processing your payment",
      description: "Thank You for shopping with us!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    router.push("/confirmation2");
  };

  return (
    <Box
      w="full"
      mx="auto"
      rounded="lg"
      bg="white"
      shadow="lg"
      p={5}
      color="gray.700"
      maxW="600px"
    >
      <Box pt={1} pb={5}></Box>
      <Box mb={10}>
        <Box
          textAlign="center"
          fontWeight="bold"
          fontSize="xl"
          textTransform="uppercase"
        >
          Secure payment info
        </Box>
      </Box>
      <Flex mb={3} mx="-2">
        <Box px={2}>
          <Image
            src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
            h="8"
            ml="3"
            mb="4"
          />
        </Box>
      </Flex>
      <Box mb={3}>
        <Text mb="1">Name on Card</Text>
        <Input
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Smith"
          type="text"
          mb="1"
        />
      </Box>
      <Box mb={3}>
        <Text mb="1">Card Number</Text>
        <Input
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="0000 0000 0000 0000"
          type="numeric"
          mb="1"
        />
      </Box>
      <Flex mb={3} mx="-2" alignItems="end">
        <Box px={2} w="50%">
          <Text mb="1">Expiration Date</Text>
          <Select
            name="expirationMonth"
            value={formData.expirationMonth}
            onChange={handleInputChange}
            placeholder="Month"
          >
            <option value="01">01 - January</option>
            <option value="02">02 - February</option>
            <option value="03">03 - March</option>
            <option value="04">04 - April</option>
            <option value="05">05 - May</option>
            <option value="06">06 - June</option>
            <option value="07">07 - July</option>
            <option value="08">08 - August</option>
            <option value="09">09 - September</option>
            <option value="10">10 - October</option>
            <option value="11">11 - November</option>
            <option value="12">12 - December</option>
          </Select>
        </Box>
        <Box px={2} w="50%">
          <Select
            name="expirationYear"
            value={formData.expirationYear}
            onChange={handleInputChange}
            placeholder="Year"
          >
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </Select>
        </Box>
      </Flex>
      <Box mb={10}>
        <Text mb="1">Security Code</Text>
        <Input
          name="securityCode"
          value={formData.securityCode}
          onChange={handleInputChange}
          placeholder="123"
          type="password"
        />
      </Box>
      <Box>
        <Button
          colorScheme="blue"
          leftIcon={<CiLock />}
          onClick={handlePayment}
        >
          PAY NOW
        </Button>
      </Box>
    </Box>
  );
};

export default CreditCardForm;
