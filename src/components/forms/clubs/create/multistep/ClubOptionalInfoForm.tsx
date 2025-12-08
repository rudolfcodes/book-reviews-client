import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FlexContainer from "@/components/FlexContainer";
import TitleContainer from "@/components/TitleContainer";
import TextContainer from "@/components/TextContainer";
import FormInput from "@/components/forms/FormInput";
import ImageUploadIcon from "@/components/icons/ImageUpload";
import { languages } from "@/data/languages";
import { useState } from "react";
import SelectDropdown from "@/components/SelectDropdown";
import GlobeIcon from "@/components/icons/GlobeIcon";
import FileInput from "@/components/forms/FileInput";
import SegmentedControlBar from "@/components/forms/segmented-control/SegmentedControlBar";

type ClubOptionalInfoFormProps = {
  onSubmit: (data: any) => void;
  setLocation?: (location: "online" | "in-person" | "hybrid") => void;
};

type ClubOptionalInfoInputFormProps = {
  genre?: string;
  bookTitle?: string;
  clubimageUrl?: File;
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
  setLocation,
  onSubmit,
}: ClubOptionalInfoFormProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [selectedLocation, setSelectedLocation] = useState<
    "online" | "in-person" | "hybrid"
  >("in-person");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClubOptionalInfoInputFormProps>({
    resolver: yupResolver(schema),
  });

  const handleLocationSelect = (type: string) => {
    if (type in locationTypes) {
      setSelectedLocation(type as "online" | "in-person" | "hybrid");
      if (setLocation) {
        setLocation(type as "online" | "in-person" | "hybrid");
      }
    }
  };

  return (
    <FlexContainer className="w-full flex flex-col gap-6 mt-6">
      <TitleContainer
        className="text-black mb-4"
        title="Complete your club information"
      />
      <TextContainer text="Add a nice image, genre and explain where the club takes place" />
      <form className="flex flex-col gap-9" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Genre:"
          type="text"
          register={register("genre")}
          error={errors.genre?.message}
          placeholder="What’s the genre of the discussed books?"
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
              title="Language"
              data={languages}
              onSelect={(language) => setSelectedLanguage(language.name)}
              selectedId={selectedLanguage}
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
          selectedOption={selectedLocation}
          onOptionSelect={handleLocationSelect}
        />
      </form>
    </FlexContainer>
  );
};

export default ClubOptionalInfoForm;
