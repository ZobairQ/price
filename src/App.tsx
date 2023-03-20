import { useState } from "react";
import { ChakraProvider, Box, Text, Grid, theme, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios";
const SERVER_ADDRESS = process.env.SERVER_ADDRESS || "localhost:8080";
export const App = () => {
  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const sendData = () => {
    axios.get(`${SERVER_ADDRESS}`, {
      params: {
        company: companyName,
        productName,
        price,
      },
    });
  };
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text color="gray.600" mt={4}>
          Pris information
        </Text>
        <Grid minH="100vh" p={8}>
          <FormControl>
            <FormLabel color="gray.600">Producentens navn</FormLabel>
            <Input type="text" onChange={(e) => setCompanyName(e.target.value)} />

            <FormLabel mt={8} color="gray.600">
              Produktets navn
            </FormLabel>
            <Input type="text" onChange={(e) => setProductName(e.target.value)} />

            <FormLabel mt={8} color="gray.600">
              Produktets Pris
            </FormLabel>
            <Input type="number" onChange={(e) => setPrice(e.target.value)} />

            <Button mt={12} padding={12} colorScheme="green" isLoading={false} type="button" onClick={sendData}>
              Print Prisen
            </Button>
          </FormControl>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
