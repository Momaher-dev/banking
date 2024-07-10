import React from "react";
import { FormField, FormLabel, FormControl } from "./ui/form";
import { Input } from "./ui/input";
// import { FormMessage } from "./ui/form-message";
import { Control } from "react-hook-form";

import { authFormSchema } from "@/lib/utils";
const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  control,
  name,
  label,
  placeholder,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type="password"
                {...field}
              />
            </FormControl>
            {/* <FormMessage className="form-message mt-2" /> */}
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
