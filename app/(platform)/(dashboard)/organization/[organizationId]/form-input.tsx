import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();

  return (
    <div>
      <Input
        id="title"
        name="title"
        type="text"
        placeholder="Enter a board title"
        disabled={pending}
        required
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
