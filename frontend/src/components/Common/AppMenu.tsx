import { Button, Flex, Text } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { FaUserAstronaut } from "react-icons/fa"
import {
  FaArrowRightFromBracket,
  FaCircleUser,
  FaGears,
  FaLock,
  FaPenToSquare,
} from "react-icons/fa6"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"
import useAuth from "@/hooks/useAuth"
import MenuLink from "./MenuLink"

const AppMenu = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <Flex>
      {!user && (
        <Link to="/auth/login" style={{ color: "black" }}>
          <Text textStyle="md" fontWeight="semibold">
            LogIn
          </Text>
        </Link>
      )}
      {user && (
        <MenuRoot>
          <MenuTrigger asChild p={2}>
            <Button data-testid="user-menu" variant="solid" maxW="sm" truncate>
              <FaUserAstronaut fontSize="18" />
              <Text>{user?.full_name || "User"}</Text>
            </Button>
          </MenuTrigger>

          <MenuContent>
            <MenuLink
              to="/user/profile"
              label="My Profile"
              value="profile"
              icon={<FaCircleUser fontSize="18px" />}
            />

            <MenuLink
              to="/user/profile-edit"
              label="Edit Profile"
              value="edit-profile"
              icon={<FaPenToSquare fontSize="18px" />}
            />

            <MenuLink
              to="/user/appearance"
              label="Appeareance"
              value="appearance"
              icon={<FaGears fontSize="18px" />}
            />

            <MenuLink
              to="/user/change-password"
              label="Change Password"
              value="change-password"
              icon={<FaLock fontSize="18px" />}
            />

            <MenuItem
              value="logout"
              gap={2}
              py={2}
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <FaArrowRightFromBracket />
              Log Out
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      )}
    </Flex>
  )
}

export default AppMenu
