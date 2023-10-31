import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { format } from 'date-fns';
import React from 'react';

interface MessageTextProps {
  name: string;
  message: string;
  time: Date;
  isUser: boolean;
}

const MessageText = ({ message, time, name, isUser }: MessageTextProps) => {
  return (
    <MessageContainer className={isUser ? 'userMessage' : 'otherMessage'}>
      <Message $isUser={isUser}>
        <Text c="white">{name}</Text>
        <Text c="white">{message}</Text>
        <TimeWrapper>
          <Text c="white">{format(time, 'dd MMM в HH:mm')}</Text>
        </TimeWrapper>
      </Message>
    </MessageContainer>
  );
};

const Message = styled('div')<{ $isUser?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px 16px;
  gap: 8px;
  max-width: 508px;
  overflow: hidden;
  border-radius: 16px;
  background-color: ${({ $isUser }) => ($isUser ? '#9076b7' : '#232530')};
  word-break: break-word;
`;

const MessageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;

  &.userMessage {
    align-items: end;
  }

  &.userMessage + .otherMessage,
  &.otherMessage + .userMessage {
    margin-top: 24px;
  }
`;

const TimeWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`;

export default MessageText;
