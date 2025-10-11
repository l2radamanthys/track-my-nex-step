import { Box, Button, Text, Card } from "@chakra-ui/react";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

const UserInformationView = () => {
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();
  const editMyProfile = () => {
    navigate({ to: "/user/profile-edit" });
  };

  return (
    <Card.Root w="full" maxW="lg" p={4} my={4} borderRadius="md">
      <Card.Header>
        <Card.Title>User Information</Card.Title>
      </Card.Header>
      <Card.Body>
        <Box mb={4}>
          <Text fontWeight="bold">First Name</Text>
          <Text
            fontSize="md"
            py={2}
            color={!currentUser?.first_name ? "gray.500" : "inherit"}
            truncate
            maxW="sm"
          >
            {currentUser?.first_name || "N/A"}
          </Text>
        </Box>
        <Box mb={4}>
          <Text fontWeight="bold">Last Name</Text>
          <Text
            fontSize="md"
            py={2}
            color={!currentUser?.last_name ? "gray.500" : "inherit"}
            truncate
            maxW="sm"
          >
            {currentUser?.last_name || "N/A"}
          </Text>
        </Box>
        <Box mb={4}>
          <Text fontWeight="bold">Email</Text>
          <Text
            fontSize="md"
            py={2}
            color={!currentUser?.email ? "gray.500" : "inherit"}
            truncate
            maxW="sm"
          >
            {currentUser?.email || "N/A"}
          </Text>
        </Box>
      </Card.Body>
      <Card.Footer>
        <Button onClick={editMyProfile}>Edit my profile</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default UserInformationView;
