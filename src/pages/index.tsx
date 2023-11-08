"use client";
import {
  Box,
  Button,
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
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const router = useRouter();

  // login with github
  function handleGit() {
    signIn("github");
  }
  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    // validate credentials
    const userValidate = await signIn("credentials", {
      userEmail,
      userPassword,
      redirect: false,
    });

    userValidate
      ? router.push("userPage")
      : alert("Email or password is invalid");
  }

  return (
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
          <form onSubmit={handleSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                border="1px solid black"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel mt="4">Password</FormLabel>
              <Input
                type="password"
                border="1px solid black"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing="2">
              <Button
                bg="gray.600"
                color="white"
                mt="10"
                _hover={{
                  bg: "gray.700",
                }}
                type="submit"
              >
                Sign in
              </Button>

              <Button
                bg="gray.600"
                color="white"
                _hover={{
                  bg: "gray.700",
                }}
                onClick={handleGit}
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
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
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
