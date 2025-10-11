import { createFileRoute } from "@tanstack/react-router";
import { Stack, Text } from "@chakra-ui/react";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Stack>
      <Text textStyle="5xl">Home</Text>
    </Stack>
  );
}
