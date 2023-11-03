import { TextInput, TextInputProps } from '@mantine/core';
import { Controller, useFormContext } from 'react-hook-form';

interface FormTextInputProps extends TextInputProps {
  name: string;
}

const FormTextField = ({ name, ...props }: FormTextInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => <TextInput {...field} {...props} error={error?.message} />}
    />
  );
};

export default FormTextField;
