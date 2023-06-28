import { View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
const countries = ["Masculino", "Feminino", "Prefiro não informar"];

interface SelectProps {
  onSelect(event: any): void;
}

export default function Select({ onSelect }: SelectProps) {
  return (
    <SelectDropdown
      data={countries}
      onSelect={onSelect}
      defaultButtonText='Genêro'
      renderDropdownIcon={() => (
        <AntDesign name='caretdown' size={16} color='#555' />
      )}
      dropdownIconPosition='left'
      buttonStyle={{
        backgroundColor: "#333",
        padding: 0,
        height: 42,
        width: 190,
        borderStyle: "solid",
        borderColor: "#555",
        borderWidth: 1,
        borderRadius: 4
      }}
      buttonTextStyle={{
        color: "#fff",
        fontSize: 14,
      }}
      dropdownStyle={{
        backgroundColor: "#333",
      }}
      rowTextStyle={{
        color: '#fff'
      }}
      rowStyle={{
        backgroundColor: "#333",
        height: 35,
      }}
    />
  );
}
