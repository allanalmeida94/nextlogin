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
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/userPage",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default function Home() {
  function handleSignIn() {
    signIn("github");
  }

  return (
    //<ChakraProvider>
    <Flex minH="100vh" align="center" justify="center" bg="gray.800">
      <Stack spacing="8" mx="auto" minW="500px" py="12" px="6">
        <Stack align="center">
          <Heading fontSize="4xl" color="white">
            Login
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
                mt="10"
                _hover={{
                  bg: "gray.700",
                }}
              >
                Sign in
              </Button>

              <Button
                bg="gray.600"
                color="white"
                _hover={{
                  bg: "gray.700",
                }}
                onClick={handleSignIn}
              >
                Sign in with github
              </Button>

              <Link
                textAlign="center"
                _hover={{
                  color: "red",
                }}
                href="http://localhost:3000/register"
              >
                Don't have an account ? Click here
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    //</ChakraProvider>
  );
}
