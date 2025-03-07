import { FormControl, FormLabel, Input } from "@mui/joy";

type MyInputProps = {
  name: string;
  type: string;
  label: string;
  placehldr: string;
};

export function MyInput({ name, type, label, placehldr }: MyInputProps) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={placehldr} type={type} name={name} required />
    </FormControl>
  );
}
