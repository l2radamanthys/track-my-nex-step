import { Container, Heading } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import ChangePassword from "@/components/User/ChangePassword"

export const Route = createFileRoute("/user/change-password")({
  component: ChangePasswordPage,
})

function ChangePasswordPage() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} py={12}>
        Change Password
      </Heading>
      <ChangePassword />
    </Container>
  )
}
