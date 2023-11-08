import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserPage() {
  const router = useRouter();
  // Layout user page
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
            User page
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
          <Button
            colorScheme="facebook"
            onClick={() => {
              router.push("/searchPage");
            }}
          >
            Search users
          </Button>
        </ButtonGroup>
      </Flex>
      <Box display="block">
        <Image src="https://wallpaperboat.com/wp-content/uploads/2020/07/13/49859/motorcycle-16.jpg"></Image>
      </Box>
    </>
  );
}
