import BaseButton from "@/components/buttons/BaseButton";
import FormInput from "@/components/forms/FormInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type ClubSearchInputProps = {
  onSearch: (data: { search: string }) => void;
  initialQuery?: string;
};

const schema: yup.ObjectSchema<any> = yup.object({
  search: yup.string().min(3),
});

const ClubSearchInput = ({ initialQuery, onSearch }: ClubSearchInputProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<{ search: string }>({
    resolver: yupResolver(schema),
    defaultValues: {
      search: initialQuery || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSearch)}>
      <FormInput
        label="Search Clubs"
        type="text"
        placeholder="Search for literary adventures near you..."
        register={register("search")}
        error={errors.search ? errors.search.message : undefined}
      />

      <BaseButton
        type="submit"
        className=""
        disabled={!isValid || isSubmitting}
      >
        Search Clubs
      </BaseButton>
    </form>
  );
};

export default ClubSearchInput;
