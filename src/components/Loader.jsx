import { Flex } from '@chakra-ui/react';
import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
   return (
      <Flex  flexDirection={"column"} justify={"center"} alignItems={"center"} >
         <InfinitySpin
            width='200'
            color="#6765f0"
         />
      </Flex>
   );
};

export default Loader;