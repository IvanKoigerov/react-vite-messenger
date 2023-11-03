import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { Controller, useFormContext } from 'react-hook-form';

interface FormTextInputProps extends PasswordInputProps {
  name: string;
}

const FormPasswordField = ({ name, ...props }: FormTextInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => <PasswordInput {...field} {...props} error={error?.message} />}
    />
  );
};

export default FormPasswordField;
