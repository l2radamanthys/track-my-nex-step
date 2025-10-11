import { Button, Container, Heading } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import UserInformation from "@/components/User/UserInformation";
import useAuth from "@/hooks/useAuth";

export const Route = createFileRoute("/user/profile")({
  component: UserProfile,
});

function UserProfile() {
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) {
    return null;
  }

  return (
    <Container maxW="full">
      <UserInformation />
    </Container>
  );
}
