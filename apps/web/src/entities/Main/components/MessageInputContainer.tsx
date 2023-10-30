import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { ActionIcon, FileButton } from '@mantine/core';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import AddFile from '~/src/assets/addFile.svg?react';
import Send from '~/src/assets/send.svg?react';
import MessageInput from '~/src/components/MessageInput.tsx';

const schema = object().shape({
  message: string().trim(),
});

const MessageInputContainer = () => {
  const form = useForm({ resolver: yupResolver(schema) });
  const [file, setFile] = useState<File | null>(null);

  return (
    <FormProvider {...form}>
      <Wrapper>
        <FileButton onChange={setFile}>
          {({ onClick }) => (
            <IconButton onClick={onClick} bg="transparent">
              <AddFile />
            </IconButton>
          )}
        </FileButton>
        <MessageInput name="message" placeholder="Введите сообщение" />
        <IconButton w={40} bg="#8872b0">
          <Send />
        </IconButton>
      </Wrapper>
    </FormProvider>
  );
};

export default MessageInputContainer;

const Wrapper = styled('div')`
  background-color: #232530;
  border-left: 1px #060814 solid;
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`;

const IconButton = styled(ActionIcon)`
  flex-shrink: 0;

  &.mantine-ActionIcon-root.mantine-UnstyledButton-root {
    height: 40px;
    border: none;
    outline: none;
    border-radius: 50%;
  }

  & svg {
    width: 32px;
    height: 32px;
  }
` as unknown as typeof ActionIcon;
