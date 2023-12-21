// Import necessary libraries and components

import { Header } from "@/components/Header";
import CreditCardForm from "@/components/debit_card/CreditCard";
import {
  ChakraProvider,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import React from "react";

// Card component
const CardTab = () => {
  return (
    <Box p={4}>
      {/* Add your card payment form or relevant content here */}
      <CreditCardForm />
    </Box>
  );
};

// Wallet component
const WalletTab = () => {
  return (
    <Box p={4}>
      {/* Add your wallet payment form or relevant content here */}
      <Text>Wallet Payment Form</Text>
    </Box>
  );
};

// Payment page component
const PaymentPage = () => {
  return (
    <ChakraProvider>
      <Header/>
      <Box p={8}>
        <Tabs size="md" variant="enclosed" isFitted>
          <TabList mb="1em">
            <Tab>CARD</Tab>
            <Tab>UPI</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <CardTab />
            </TabPanel>
            <TabPanel>
              <WalletTab />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </ChakraProvider>
  );
};

export default PaymentPage;
