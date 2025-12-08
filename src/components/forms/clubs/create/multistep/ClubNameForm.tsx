import FlexContainer from "@/components/FlexContainer";
import FormInput from "@/components/forms/FormInput";
import TextContainer from "@/components/TextContainer";
import TitleContainer from "@/components/TitleContainer";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextArea from "@/components/forms/TextArea";

type ClubNameInputFormProps = {
  name: string;
  description?: string;
};

type ClubNameFormProps = {
  onDataChange: (data: ClubNameInputFormProps) => void;
  onValidationChange: (isValid: boolean) => void;
};

const schema: yup.ObjectSchema<ClubNameInputFormProps> = yup.object({
  name: yup
    .string()
    .required("Club name is required")
    .min(3, "Club name must be at least 3 characters")
    .max(50, "Club name must be at most 50 characters"),
  description: yup
    .string()
    .max(200, "Club description must be at most 200 characters"),
});

const ClubNameForm = ({
  onDataChange,
  onValidationChange,
}: ClubNameFormProps) => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    const subscription = watch((value: ClubNameInputFormProps) => {
      onDataChange(value);
    }) as { unsubscribe: () => void };
    return () => subscription.unsubscribe();
  }, [watch, onDataChange]);

  useEffect(() => {
    onValidationChange(isValid);
  }, [isValid, onValidationChange]);

  return (
    <FlexContainer className="w-full flex flex-col gap-6 mt-6">
      <TitleContainer
        className="text-black mb-4"
        title="Create a new literary community"
      />
      <TextContainer text="A great club name will increase the chances of more engaged members" />
      <form>
        <FormInput
          label="Club name:"
          type="text"
          register={register("name")}
          error={errors.name?.message}
          placeholder="What’s the name of your club?"
          required
        />

        <TextArea
          label="Description:"
          register={register("description")}
          error={errors.description?.message}
          placeholder="What’s  the subject of your club?"
          rows={4}
        />
      </form>
    </FlexContainer>
  );
};

export default ClubNameForm;
