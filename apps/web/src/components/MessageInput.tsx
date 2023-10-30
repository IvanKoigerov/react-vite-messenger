import styled from '@emotion/styled';
import { Textarea } from '@mantine/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface MessageInputProps {
  name: string;
  placeholder: string;
}

const MessageInput = ({ name, ...props }: MessageInputProps) => {
  const { control } = useFormContext();

  return (
    <MessageInputWrapper>
      <Controller
        control={control}
        name={name}
        render={({ field }) => <TextareaMessage bg="#060814" {...field} {...props} autosize maxRows={7} />}
      />
    </MessageInputWrapper>
  );
};

export default MessageInput;

const TextareaMessage = styled(Textarea)`
  min-width: 0;
  overflow: hidden;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: #ffffff;

  &::placeholder {
    color: #7f8893;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }
`;

const MessageInputWrapper = styled('div')`
  min-width: 0;
  width: 100%;
  background: #2c3139;
  border-radius: 18px;
  overflow: hidden;

  & .mantine-Input-input.mantine-Textarea-input {
    background: transparent;
    border: none;
    color: #ffffff;
    min-height: 40px;
    padding: 8px 12px;
  }
`;
