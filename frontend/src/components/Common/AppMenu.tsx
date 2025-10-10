import useAuth from "@/hooks/useAuth";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { FaUserAstronaut } from "react-icons/fa";
import { FiLogOut, FiUser } from "react-icons/fi";

const AppMenu = () => {
  const { user, logout } = useAuth();

  console.log("user", user);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Flex>
        {!user && (
          <Link to="/auth/login" style={{color: "black"}}>
            <Text textStyle="md" fontWeight="semibold">LogIn</Text>
          </Link>
        )}
        {user && (
          <>
            <MenuRoot>
              <MenuTrigger asChild p={2}>
                <Button
                  data-testid="user-menu"
                  variant="solid"
                  maxW="sm"
                  truncate
                >
                  <FaUserAstronaut fontSize="18" />
                  <Text>{user?.full_name || "User"}</Text>
                </Button>
              </MenuTrigger>

              <MenuContent>
                <Link to="/user/profile">
                  <MenuItem
                    closeOnSelect
                    value="user-settings"
                    gap={2}
                    py={2}
                    style={{ cursor: "pointer" }}
                  >
                    <FiUser fontSize="18px" />
                    <Box flex="1">My Profile</Box>
                  </MenuItem>
                </Link>

                <MenuItem
                  value="logout"
                  gap={2}
                  py={2}
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  <FiLogOut />
                  Log Out
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          </>
        )}
      </Flex>
    </>
  );
};

export default AppMenu;
