import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  type ApiError,
  type UserPublic,
  UsersService,
  type UserUpdateMe,
} from "@/client";
import useAuth from "@/hooks/useAuth";
import useCustomToast from "@/hooks/useCustomToast";
import { emailPattern, handleError } from "@/utils";
import { Field } from "../ui/field";
import { useNavigate } from "@tanstack/react-router";

const EditProfile = () => {
  const queryClient = useQueryClient();
  const { showSuccessToast } = useCustomToast();
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isDirty },
  } = useForm<UserPublic>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: currentUser?.email,
      first_name: currentUser?.first_name,
      last_name: currentUser?.last_name,
    },
  });

  const mutation = useMutation({
    mutationFn: (data: UserUpdateMe) =>
      UsersService.updateUserMe({ requestBody: data }),
    onSuccess: () => {
      showSuccessToast("User updated successfully.");
      queryClient.invalidateQueries();
      navigate({ to: "/user/profile" });
    },
    onError: (err: ApiError) => handleError(err),
  });

  const onSubmit: SubmitHandler<UserUpdateMe> = async (data) => {
    mutation.mutate(data);
  };

  const onCancel = () => {
    reset();
  };

  return (
    <Container maxW="full">
      <Heading size="sm" py={4}>
        User Information
      </Heading>

      <Box
        w={{ sm: "full", md: "sm" }}
        as="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          label="Email"
          invalid={!!errors.email}
          errorText={errors.email?.message}
        >
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: emailPattern,
            })}
            type="email"
            size="md"
          />
        </Field>

        <Field mt={4} label="First name">
          <Input
            {...register("first_name", { maxLength: 30 })}
            type="text"
            size="md"
          />
        </Field>

        <Field mt={4} label="Full name">
          <Input
            {...register("last_name", { maxLength: 30 })}
            type="text"
            size="md"
          />
        </Field>

        <Flex mt={4} gap={3}>
          <Button
            variant="solid"
            type="submit"
            isLoading={isSubmitting}
            disabled={!isDirty}
          >
            Save
          </Button>
          <Button
            variant="subtle"
            colorPalette="gray"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default EditProfile;
