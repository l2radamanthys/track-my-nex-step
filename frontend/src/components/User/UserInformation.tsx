import { Box, Container, Heading, Text } from "@chakra-ui/react"
import useAuth from "@/hooks/useAuth"

const UserInformationView = () => {
  const { user: currentUser } = useAuth()

  return (
    <Container maxW="full">
      <Box w={{ sm: "full", md: "sm" }}>
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
      </Box>
    </Container>
  )
}

export default UserInformationView
