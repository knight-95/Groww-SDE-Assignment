import { Box, CircularProgress, Text } from "@chakra-ui/react";

function Loader() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress isIndeterminate color="blue.500" size="2rem" />
      <Text mt="4" fontWeight="bold">
        Please wait while we fetch the data...
      </Text>
    </Box>
  );
}

export default Loader;
