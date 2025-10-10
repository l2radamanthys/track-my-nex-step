import { Flex } from "@chakra-ui/react";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import Navbar from "@/components/Common/Navbar";
import Sidebar from "@/components/Common/Sidebar";
import { isLoggedIn } from "@/hooks/useAuth";

export const Route = createFileRoute("/_layout")({
  component: Layout,
  beforeLoad: async () => {
    if (!isLoggedIn()) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

function Layout() {
  return (
    <div>
      Layout Main
      <Outlet />
    </div>
  );
}

export default Layout;
