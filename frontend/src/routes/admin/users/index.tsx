import { createFileRoute } from "@tanstack/react-router";
import { Badge, Container, Flex, Heading, Table } from "@chakra-ui/react";
import UsersTable from "@/components/Admin/Users/UsersTable";
import { z } from "zod";
import { useRouter } from "@tanstack/react-router";
import AddUser from "@/components/Admin/Users/AddUser";

export const Route = createFileRoute("/admin/users/")({
  component: RouteComponent,
  validateSearch: (search) => usersSearchSchema.parse(search),
});

const usersSearchSchema = z.object({
  page: z.number().catch(1),
});

function RouteComponent() {
  const router = useRouter();
  const page = router.latestLocation?.search?.page;
  const path = router.latestLocation?.pathname;
  return (
    <>
      <Container maxW="full">
        <Heading size="lg" pt={12}>
          Users Management
        </Heading>

        <AddUser />
        <UsersTable />
      </Container>
    </>
  );
}
