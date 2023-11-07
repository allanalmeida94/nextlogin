"use client";

import {
  Box,
  Button,
  ChakraProvider,
  Link,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <ChakraProvider>
      <Flex minH="100vh" align="center" justify="center" bg="gray.800">
        <Stack spacing="8" mx="auto" minW="500px" py="12" px="6">
          <Stack align="center">
            <Heading fontSize="4xl" color="white">
              Register
            </Heading>
          </Stack>

          <Box
            rounded="lg"
            bg="white"
            boxShadow="lg"
            p="8"
            width="500px"
            height="400px"
            mb="200px"
          >
            <Stack spacing="4">
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" border="1px solid black" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" border="1px solid black" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" border="1px solid black" />
              </FormControl>
              <Stack spacing="2">
                <Button
                  bg="gray.600"
                  color="white"
                  mt="5"
                  _hover={{
                    bg: "gray.700",
                  }}
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
