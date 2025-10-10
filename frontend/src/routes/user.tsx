import { createFileRoute, Outlet } from "@tanstack/react-router";
import Navbar from '@/components/Common/Navbar'
import { Flex } from '@chakra-ui/react'

export const Route = createFileRoute("/user")({
  component: Layout,
});

function Layout() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex="1" overflow="hidden">
        <Flex flex="1" direction="column" p={4} overflowY="auto">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}
