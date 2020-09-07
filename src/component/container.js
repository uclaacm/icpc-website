import React from 'react';
import {Box} from '@chakra-ui/core';

const Container = ({mt, children}) => {
  return (
    <Box
      maxWidth={["512px", "512px", "800px", "1280px"]}
      mx='auto'
      px={3}
    >
      {children}
    </Box>
  );
};

export default Container;
