"use client";

import { useCallback, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createClub } from "@/services/clubService";
import FlexContainer from "@/components/FlexContainer";
import SegmentedControlBar from "@/components/forms/segmented-control/SegmentedControlBar";
import BaseButton from "@/components/buttons/BaseButton";
import ClubNameForm from "@/components/forms/clubs/create/multistep/ClubNameForm";
import ClubOptionalInfoForm from "@/components/forms/clubs/create/multistep/ClubOptionalInfoForm";
import Illustration from "@/components/Illustration";
import { useRouter } from "next/router";

/* Next.js Router structure:
  GET /clubs/new -> src/app/clubs/new/page.tsx
  GET /clubs -> src/app/clubs/page.tsx
  GET /clubs/[id] -> src/app/clubs/[id]/page.tsx

  Events:
   GET /clubs/[id]/events -> src/app/clubs/[id]/events/page.tsx
   GET /clubs/[id]/events/new -> src/app/clubs/[id]/events/new/page.tsx
   GET /clubs/[id]/events/[eventId] -> src/app/clubs/[id]/events/[eventId]/page.tsx

*/

export default function CreateClubPage() {
  const router = useRouter();
  const [selectedStep, setSelectedStep] = useState("name club");
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    genre?: string;
    bookTitle?: string;
    clubimageUrl?: File | null;
    language?: "en" | "de" | "fr" | "it";
    location?: "online" | "in-person" | "hybrid";
  }>({
    name: "",
    description: "",
    genre: "",
    bookTitle: "",
    clubimageUrl: null,
    language: "en",
    location: "in-person",
  });
  const [stepValidation, setStepValidation] = useState<{
    nameClub: boolean;
    optionalInfo: boolean;
  }>({
    nameClub: false,
    optionalInfo: true,
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const currentStep = selectedStep;
  // This is the page for creating a new club
  // language should be fetched from a global state or context and the default value is "en"
  let lang: "de" | "fr" | "it" | "en" = "en" as "de" | "fr" | "it" | "en";
  const formSteps = [
    {
      label: "name club",
      value: lang === "de" ? "name des clubs" : "name club",
    },
    {
      label: "optional info",
      value: lang === "de" ? "optionale info" : "optional info",
    },
  ];

  const createClubMutation = useMutation({
    mutationFn: createClub,
    onSuccess: (data) => {
      router.push(`/clubs/${data.id}`);
    },
    onError: (error) => {
      console.error("Error creating club:", error);
    },
  });

  useEffect(() => {
    console.log("Current form data:", formData);
  }, [formData]);

  useEffect(() => {
    setIsFormValid(stepValidation.nameClub);
  }, [stepValidation]);

  const handleOptionSelect = (option: string) => {
    if (formSteps.some((step) => step.value === option)) {
      setSelectedStep(option);
    }
  };

  const handleLocation = useCallback(
    (location: "online" | "in-person" | "hybrid") => {
      console.log("Selected location in parent:", location);
      setFormData((prev) => ({ ...prev, location }));
    },
    []
  );

  const handleSubmit = async () => {
    if (!isFormValid) {
      console.error("Form is not valid. Please fill in all required fields.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    if (formData.genre) formDataToSend.append("genre", formData.genre);
    if (formData.bookTitle)
      formDataToSend.append("bookTitle", formData.bookTitle);
    if (formData.clubimageUrl)
      formDataToSend.append("clubimageUrl", formData.clubimageUrl);
    if (formData.language) formDataToSend.append("language", formData.language);
    if (formData.location) formDataToSend.append("location", formData.location);

    // Trigger mutation
    createClubMutation.mutate(formDataToSend);
  };

  const handleNameFormDataChange = useCallback(
    (data: { name: string; description: string }) => {
      setFormData((prev) => ({ ...prev, ...data }));
    },
    []
  );

  const handleOptionalInfoDataChange = useCallback(
    (data: Partial<typeof formData>) => {
      setFormData((prev) => ({ ...prev, ...data }));
    },
    []
  );

  const handleNameValidationChange = useCallback((isValid: boolean) => {
    setStepValidation((prev) => ({ ...prev, nameClub: isValid }));
  }, []);

  const handleOptionalInfoValidationChange = useCallback((isValid: boolean) => {
    setStepValidation((prev) => ({ ...prev, optionalInfo: isValid }));
  }, []);

  return (
    <FlexContainer className="create-club-page lg:max-w-7xl mx-auto justify-between gap-12 p-8 mb-24 font-plusJakarta">
      <FlexContainer className="w-full flex-col max-w-[530px] bg-white gap-6">
        {createClubMutation.isError && (
          <p className="text-error text-base text-center mb-4">
            Error creating club. Please try again.
          </p>
        )}

        <SegmentedControlBar
          options={formSteps}
          selectedOption={selectedStep}
          onOptionSelect={handleOptionSelect}
        />

        {currentStep === "name club" && (
          <ClubNameForm
            defaultValues={{
              name: formData.name,
              description: formData.description,
            }}
            onDataChange={handleNameFormDataChange}
            onValidationChange={handleNameValidationChange}
          />
        )}
        {currentStep === "optional info" && (
          <ClubOptionalInfoForm
            defaultValues={{
              genre: formData.genre,
              bookTitle: formData.bookTitle,
              clubimageUrl: formData.clubimageUrl,
              language: formData.language,
              location: formData.location,
            }}
            onDataChange={handleOptionalInfoDataChange}
            onValidationChange={handleOptionalInfoValidationChange}
            setLocation={handleLocation}
          />
        )}

        <BaseButton
          className="bg-error text-white rounded-xl hover:scale-105 hover:bg-error transition-all duration-200 border-none max-w-64 !p-5 h-14"
          type="submit"
          disabled={!isFormValid || createClubMutation.isPending}
          onClick={handleSubmit}
        >
          {createClubMutation.isPending ? "Submitting..." : "Create Club"}
        </BaseButton>
      </FlexContainer>

      <div className="hidden lg:block xl:w-[718px] xl:flex-shrink-0">
        <Illustration
          src="/images/create-club-illustration.png"
          alt="Create Club Image"
          className="relative -top-4"
          width={718}
          height={605}
          size="auto"
        />
      </div>
    </FlexContainer>
  );
}
