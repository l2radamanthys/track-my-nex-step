import { Container, Heading } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import Appearance from "@/components/User/Appearance"

export const Route = createFileRoute("/user/appearance")({
  component: AppearancePage,
})

function AppearancePage() {
  return (
    <Container maxW="full">
      <Heading size="lg" textAlign={{ base: "center", md: "left" }} py={12}>
        Appearances
      </Heading>
      <Appearance />
    </Container>
  )
}
