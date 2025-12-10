import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FlexContainer from "@/components/FlexContainer";
import TitleContainer from "@/components/TitleContainer";
import TextContainer from "@/components/TextContainer";
import FormInput from "@/components/forms/FormInput";
import ImageUploadIcon from "@/components/icons/ImageUpload";
import { languages } from "@/data/languages";
import { useEffect, useState } from "react";
import SelectDropdown from "@/components/SelectDropdown";
import GlobeIcon from "@/components/icons/GlobeIcon";
import FileInput from "@/components/forms/FileInput";
import SegmentedControlBar from "@/components/forms/segmented-control/SegmentedControlBar";

type ClubOptionalInfoFormProps = {
  onDataChange: (data: ClubOptionalInfoInputFormProps) => void;
  onValidationChange?: (isValid: boolean) => void;
  defaultValues?: ClubOptionalInfoInputFormProps;
  setLocation?: (location: "online" | "in-person" | "hybrid") => void;
};

type ClubOptionalInfoInputFormProps = {
  genre?: string;
  bookTitle?: string;
  clubimageUrl?: File | null;
  language?: "en" | "de" | "fr" | "it";
  location?: "online" | "in-person" | "hybrid";
};

const schema: yup.ObjectSchema<ClubOptionalInfoInputFormProps> = yup.object({
  genre: yup.string().max(50, "Genre must be at most 50 characters"),
  bookTitle: yup
    .string()
    .min(2)
    .max(100, "Book title must be at most 100 characters"),
  clubimageUrl: yup
    .mixed<File>()
    .test("fileType", "File size is too large", (value) => {
      if (!value) return true;
      const maxSize = 5 * 1024 * 1024;

      if (value.size > maxSize) return false;
      return true;
    }),
  language: yup
    .string<"en" | "de" | "fr" | "it">()
    .oneOf(["en", "de", "fr", "it"], "Invalid language selection"),
  location: yup
    .string<"online" | "in-person" | "hybrid">()
    .oneOf(["online", "in-person", "hybrid"], "Invalid location selection"),
});

const locationTypes = {
  online: "Online",
  "in-person": "In-Person",
  hybrid: "Hybrid",
};

const ClubOptionalInfoForm = ({
  onDataChange,
  onValidationChange,
  defaultValues,
}: ClubOptionalInfoFormProps) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<ClubOptionalInfoInputFormProps>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: defaultValues || {
      genre: "",
      bookTitle: "",
      clubimageUrl: null,
      language: "en",
      location: "in-person",
    },
  });

  useEffect(() => {
    const subscription = watch((value: ClubOptionalInfoInputFormProps) => {
      onDataChange({
        ...value,
      });
    }) as { unsubscribe: () => void };
    return () => subscription.unsubscribe();
  }, [watch, onDataChange]);

  useEffect(() => {
    onValidationChange && onValidationChange(isValid);
  }, [isValid, onValidationChange]);

  return (
    <FlexContainer className="w-full flex flex-col gap-6 mt-6">
      <TitleContainer
        className="text-black !text-3xl"
        title="Complete your club information"
      />
      <TextContainer
        className="text-sm text-light-grey"
        text="Add a nice image, genre and explain where the club takes place"
      />
      <form className="flex flex-col gap-9 mt-3">
        <SelectDropdown
          id="club-genre"
          label="Genre:"
          title="Select Genre"
          data={[
            { id: "fiction", name: "Fiction" },
            { id: "non-fiction", name: "Non-Fiction" },
            { id: "mystery", name: "Mystery" },
            { id: "fantasy", name: "Fantasy" },
            { id: "biography", name: "Biography" },
          ]}
          onSelect={(selectedGenre) => setValue("genre", selectedGenre.id)}
          selectedId={watch("genre") || ""}
          position="top-full-left-0"
        />
        <FormInput
          label="Book title:"
          type="text"
          register={register("bookTitle")}
          error={errors.bookTitle?.message}
          placeholder="What book will you be discussing?"
        />
        <FlexContainer className="gap-4">
          <FileInput
            className="w-1/2"
            label="Club image:"
            register={register("clubimageUrl")}
            error={errors.clubimageUrl?.message}
            placeholder="Upload image"
            icon={<ImageUploadIcon />}
          />

          <div className="flex flex-col w-full justify-end">
            <SelectDropdown
              id="club-language"
              label="Club language:"
              title="Language"
              data={languages}
              onSelect={(language) =>
                setValue("language", language.id as "en" | "de" | "fr" | "it")
              }
              selectedId={watch("language") || "en"}
              position="top-full-left-0"
              icon={<GlobeIcon />}
              hasImage
            />
          </div>
        </FlexContainer>
        <SegmentedControlBar
          options={[
            { value: "in-person", label: "In-Person" },
            { value: "online", label: "Online" },
            { value: "hybrid", label: "Hybrid" },
          ]}
          selectedOption={watch("location") || "in-person"}
          onOptionSelect={(type) => {
            setValue("location", type as "online" | "in-person" | "hybrid");
          }}
        />
      </form>
    </FlexContainer>
  );
};

export default ClubOptionalInfoForm;
