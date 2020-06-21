import React from 'react';

// Chakra imports:
import { Heading, Flex } from "@chakra-ui/core";

const Footer = () => {
    return (
      <>
        <Flex
          as="nav"
          align="center"
          justify="start"
          wrap="wrap"
          padding="1.5rem"
          bg="teal.500"
          color="white"
        >
          <Flex align="center" p={4}>
            <Heading as="h4" size="sm" letterSpacing={".1rem"}>
              "There are three methods to gaining wisdom. The first is
              reflection, which is the highest. The second is limitation, which
              is the easiest. The third is experience, which is the bitterest."
              ~ Confucius
            </Heading>
          </Flex>
        </Flex>
      </>
    );
}

export default Footer;