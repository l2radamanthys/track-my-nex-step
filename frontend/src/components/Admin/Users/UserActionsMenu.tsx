import { IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import type { UserPublic } from "@/client";
import DeleteUser from "../Users/DeleteUser";
import EditUser from "../Users/EditUser";
import { MenuContent, MenuRoot, MenuTrigger } from "../../ui/menu";
import EditUserPassword from "./EditPassword";

interface UserActionsMenuProps {
  user: UserPublic;
  disabled?: boolean;
}

export const UserActionsMenu = ({ user, disabled }: UserActionsMenuProps) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <IconButton variant="ghost" color="inherit" disabled={disabled}>
          <BsThreeDotsVertical />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <EditUser user={user} />
        <EditUserPassword user={user} />
        <DeleteUser id={user.id} />
      </MenuContent>
    </MenuRoot>
  );
};
