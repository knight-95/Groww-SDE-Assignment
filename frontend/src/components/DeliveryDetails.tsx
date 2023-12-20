import React, { useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

interface DeliveryDetailsProps {
  onSubmit: () => void; // Pass a callback to be triggered on successful form submission
}

const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const toast = useToast();

  const handleSubmit = () => {
    // Perform validation
    if (!fullName || !address || !zipCode || !city || !phoneNumber || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // If all validations pass, proceed with form submission
    toast({
      title: "Success",
      description: "Address saved successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Trigger the callback provided by the parent component
    onSubmit();
  };

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      align={{ lg: "flex-start" }}
      spacing={{ base: "8", md: "16" }}
      marginTop="2.5rem"
    >
      <Stack
        spacing={{ base: "8", md: "10" }}
        flex="2"
        borderWidth="1px"
        rounded="lg"
      >
        <Card shadow="none">
          <CardHeader>
            <Heading size="md">Delivery Information</Heading>
          </CardHeader>

          <CardBody>
            <Stack spacing="2rem">
              <Box>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="123 Example Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Box>

              <Flex justify="space-between">
                <Box>
                  <FormLabel>Zip Code</FormLabel>
                  <Input
                    type="text"
                    placeholder="Zip Code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </Box>

                <Box>
                  <FormLabel>City</FormLabel>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Box>
              </Flex>

              <Box>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="xyz@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>

              <Button onClick={handleSubmit} maxW="15rem" colorScheme="blue">Save Address</Button>
            </Stack>
          </CardBody>
        </Card>
      </Stack>

      <Flex direction="column" align="center" flex="1"></Flex>
    </Stack>
  );
};

export default DeliveryDetails;
