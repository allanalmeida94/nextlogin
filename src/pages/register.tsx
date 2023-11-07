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
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const router = useRouter();

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    await fetch("http://localhost:3000/api/users/createUser", {
      method: "POST",
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

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
            <form onSubmit={handleCreateUser}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  border="1px solid black"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel mt="4">Email address</FormLabel>
                <Input
                  type="email"
                  border="1px solid black"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel mt="4">Password</FormLabel>
                <Input
                  type="password"
                  border="1px solid black"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing="2">
                <Button
                  bg="gray.600"
                  color="white"
                  mt="5"
                  _hover={{
                    bg: "gray.700",
                  }}
                  type="submit"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Register
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}
