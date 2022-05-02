import React from 'react';
import { Box } from '@chakra-ui/react';

const MainContent = ({ children }) => (
  <div style={{ minHeight: '100vh', overflowX: 'hidden'}}>
    <Box
      pt={16}
    >
      {children}
    </Box>
  </div>
);

export default MainContent;
