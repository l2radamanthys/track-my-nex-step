import { createFileRoute } from "@tanstack/react-router";
import { Container, Heading } from "@chakra-ui/react";

export const Route = createFileRoute("/user/change-password")({
  component: ChangePassword,
});

function ChangePassword() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} py={12}>
        Change Password
      </Heading>
    </Container>
  );
}
