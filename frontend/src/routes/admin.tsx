import { Flex } from "@chakra-ui/react";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import Navbar from "@/components/Common/Navbar";
import Sidebar from "@/components/Admin/Common/Sidebar";
import { isLoggedIn } from "@/hooks/useAuth";

export const Route = createFileRoute("/admin")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/auth/login",
      });
    }
  },
});

function Layout() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Flex flex="1" direction="column" p={4} overflowY="auto">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Layout;
