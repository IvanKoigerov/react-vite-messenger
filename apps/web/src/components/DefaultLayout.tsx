import styled from '@emotion/styled';
import { Box } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <MainWrapper>
      <Aside />
      <Box bg="#060814">
        <Outlet />
      </Box>
    </MainWrapper>
  );
};

export default DefaultLayout;

const MainWrapper = styled('div')`
  display: grid;
  grid-template-columns: 300px 6fr;
  width: 100vw;
  height: 100vh;
`;

const Aside = styled(Box)`
  background-color: #232530;
  max-width: 300px;
`;
