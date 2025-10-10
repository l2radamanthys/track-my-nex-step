import { createFileRoute } from '@tanstack/react-router'
import { Container, Heading } from '@chakra-ui/react'

export const Route = createFileRoute('/user/appearance')({
  component: Appearance,
})

function Appearance() {
  return (
      <Container maxW="full">
        <Heading size="lg" textAlign={{ base: "center", md: "left" }} py={12}>
          Appearance
        </Heading>
  
      </Container>
  )
}
