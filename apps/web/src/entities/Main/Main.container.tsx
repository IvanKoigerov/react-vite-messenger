import styled from '@emotion/styled';
import { Box, Flex } from '@mantine/core';
import React from 'react';

import MessageText from '~/src/components/MessageText.tsx';
import MessageInputContainer from '~/src/entities/Main/components/MessageInputContainer.tsx';

const mockData = [
  {
    name: 'My Name',
    message:
      '<div style={{ minHeight: 100000 }}> ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы </div> <div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div>',
    time: new Date(),
    isUser: false,
  },
  {
    name: 'My Name',
    message:
      '<div style={{ minHeight: 100000 }}> ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы </div> <div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div>',
    time: new Date(),
    isUser: false,
  },
  {
    name: 'My Name',
    message:
      '<div style={{ minHeight: 100000 }}> ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы </div> <div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div>',
    time: new Date(),
    isUser: false,
  },
  {
    name: 'Your Name',
    message:
      '<div style={{ minHeight: 100000 }}> ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы </div> <div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div>',
    time: new Date(),
    isUser: true,
  },
  {
    name: 'Your Name',
    message:
      '<div style={{ minHeight: 100000 }}> ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы </div> <div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div>',
    time: new Date(),
    isUser: true,
  },
  {
    name: 'My Name',
    message:
      '<div style={{ minHeight: 100000 }}> ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы </div> <div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div><div style={{ minHeight: 100000 }}>ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы</div>',
    time: new Date(),
    isUser: false,
  },
];

const MainContainer = () => {
  return (
    <Wrapper>
      <MessageContainer>
        {mockData.map((data, index) => (
          <MessageText key={index} {...data} />
        ))}
      </MessageContainer>
      <MessageInputContainer />
    </Wrapper>
  );
};

const MessageContainer = styled('div')`
  flex: 1;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Wrapper = styled(Flex)`
  max-height: 100vh;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
`;

export default MainContainer;
