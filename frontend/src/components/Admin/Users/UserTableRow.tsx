import { Badge, Table } from "@chakra-ui/react";
import { type UserPublic } from "@/client";
import { UserActionsMenu } from "./UserActionsMenu";

const UserTableRow = ({
  user,
  currentUserId,
  isPlaceholderData,
}: {
  user: UserPublic;
  currentUserId: string | null;
  isPlaceholderData: boolean;
}) => {
  return (
    <Table.Row key={user.id} opacity={isPlaceholderData ? 0.5 : 1}>
      <Table.Cell color={!user.full_name ? "gray" : "inherit"}>
        {user.full_name || "N/A"}
        {currentUserId === user.id && (
          <Badge ml="1" colorScheme="teal">
            You
          </Badge>
        )}
      </Table.Cell>
      <Table.Cell truncate maxW="sm">
        {user.email}
      </Table.Cell>
      <Table.Cell>{user.is_superuser ? "Superuser" : "User"}</Table.Cell>
      <Table.Cell>{user.is_active ? "Active" : "Inactive"}</Table.Cell>
      <Table.Cell>
        <UserActionsMenu user={user} disabled={currentUserId === user.id} />
      </Table.Cell>
    </Table.Row>
  );
};

export default UserTableRow;
