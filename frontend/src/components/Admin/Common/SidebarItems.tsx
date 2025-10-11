import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Link as RouterLink } from "@tanstack/react-router";
import { FiPackage, FiHome, FiSettings, FiUsers } from "react-icons/fi";
import type { IconType } from "react-icons/lib";

import type { UserPublic } from "@/client";

interface Item {
  icon: IconType;
  title: string;
  path: string;
}

const items = [
  { icon: FiHome, title: "Admin Dashboard", path: "/admin" },
  { icon: FiPackage, title: "Users", path: "/admin/users" },
  { icon: FiPackage, title: "Roles", path: "/admin/users" },
  { icon: FiPackage, title: "Permissions", path: "/admin/users" },
  { icon: FiPackage, title: "Items", path: "/admin/items" },
];

interface SidebarItemsProps {
  onClose?: () => void;
}

const SidebarItems = ({ onClose }: SidebarItemsProps) => {
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);

  const listItems = items.map(({ icon, title, path }) => (
    <RouterLink key={title} to={path} onClick={onClose}>
      <Flex
        gap={4}
        px={4}
        py={2}
        _hover={{
          background: "gray.subtle",
        }}
        alignItems="center"
        fontSize="sm"
      >
        <Icon as={icon} alignSelf="center" />
        <Text ml={2}>{title}</Text>
      </Flex>
    </RouterLink>
  ));

  return (
    <>
      <Text fontSize="xs" px={4} py={2} fontWeight="bold">
        Menu
      </Text>
      <Box>{listItems}</Box>
    </>
  );
};

export default SidebarItems;
