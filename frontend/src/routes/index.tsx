import Navbar from '@/components/Common/Navbar'
import { Flex } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex="1" overflow="hidden">
        <Flex flex="1" direction="column" p={4} overflowY="auto">
          Main Page
        </Flex>
      </Flex>
    </Flex>
  </>
}
