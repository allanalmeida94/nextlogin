import { prisma } from "@/lib/prisma";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import { GetServerSideProps } from "next";
import { signOut } from "next-auth/react";

type UsersProps = {
  users: User[];
};

export default function UserPage({ users }: UsersProps) {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        p="5"
        bg="gray.800"
      >
        <Box p="2">
          <Heading size="lg" color="white">
            Search page
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button
            colorScheme="facebook"
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          >
            Sign out
          </Button>
        </ButtonGroup>
      </Flex>
      <Box>
        <Container>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        </Container>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();

  return {
    props: {
      users,
    },
  };
};
