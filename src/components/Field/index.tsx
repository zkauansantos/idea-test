import { Control, Controller, FieldValues } from "react-hook-form";
import { View, Text } from "react-native";
import { Input } from "../../screens/Form/styles";

interface FieldProps {
  control: Control<FieldValues, any>;
  name: string;
  placeholder: string;
}

export default function Field({ control, name, placeholder }: FieldProps) {
  return (
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
  );
}
