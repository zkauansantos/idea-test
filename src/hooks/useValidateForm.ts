import { UseFormReturn, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";

export default function useValidateForm<T extends FieldValues>(schema: any) {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    control,
    setValue,
  }: UseFormReturn<T> = useForm({
    resolver: yupResolver(schema),
  });

  const { errors, isSubmitting, isLoading } = formState;

  return {
    register,
    handleSubmit,
    errors,
    reset,
    control,
    formState,
    isSubmitting,
    isLoading,
    setValue,
  };
}
