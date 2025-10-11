import { Container, Heading } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import EditProfile from "@/components/User/EditProfile"

export const Route = createFileRoute("/user/profile-edit")({
  component: ProfileEdit,
})

function ProfileEdit() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} py={12}>
        Edit Profile
      </Heading>
      <EditProfile />
    </Container>
  )
}
