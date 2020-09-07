import React from 'react';
import {Box} from '@chakra-ui/core';

const MainContent = ({children}) => {
  return (
    <div style={{minHeight: '100vh'}}>
      <Box
        pt={16}
      >
        {children}
      </Box>
    </div>
  );
};

export default MainContent;

