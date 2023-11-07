import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export default function UserPage() {
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
    </>
  );
}
