import { Button, Container, Heading } from "@chakra-ui/react"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import UserInformation from "@/components/User/UserInformation"
import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/user/profile")({
  component: UserProfile,
})

function UserProfile() {
  const { user: currentUser } = useAuth()
  const navigate = useNavigate()

  if (!currentUser) {
    return null
  }

  const editMyProfile = () => {
    navigate({ to: "/user/profile-edit" })
  }

  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} py={12}>
        User Informatión
      </Heading>
      <UserInformation />

      <Button onClick={editMyProfile}>Edit my profile</Button>
    </Container>
  )
}
