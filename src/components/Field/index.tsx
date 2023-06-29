import { Control, Controller, FieldValues } from "react-hook-form";
import { Input } from "../../screens/Form/styles";
import { FieldContainer } from "./styles";
import { ErrorFeedback } from "../ErrorFeedBack";

interface FieldProps {
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
  errors: any;
}

export default function Field({
  control,
  name,
  placeholder,
  errors,
}: FieldProps) {
  return (
    <FieldContainer>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#555'
          />
        )}
      />
      {!!errors[name] && <ErrorFeedback>{errors[name].message}</ErrorFeedback>}
    </FieldContainer>
  );
}
