import React from 'react';
import {Box} from '@chakra-ui/core';

const Container = ({narrow, children}) => {
  if (narrow) {
    return (
      <Box
        maxWidth={["512px", "768px", "800px", "1000px"]}
        mx='auto'
        px={3}
      >
        {children}
      </Box>
    );
  }
  return (
    <Box
      maxWidth={["512px", "768px", "800px", "1280px"]}
      mx='auto'
      px={3}
    >
      {children}
    </Box>
  );
};

export default Container;
