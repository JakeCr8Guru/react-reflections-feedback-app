import React from "react";

// Chakra imports:
import { Heading, Flex } from "@chakra-ui/core";

// This is the Footer component that is displayed on every route
const Footer = () => {
  return (
    <>
      <Flex
        as="nav"
        padding="1.5rem"
        bg="teal.500"
        color="white"
        pos="absolute"
        top="100%"
      >
        <Flex p={4}>
          <Heading as="h4" size="sm" letterSpacing={".1rem"}>
            "There are three methods to gaining wisdom. The first is reflection,
            which is the highest. The second is limitation, which is the
            easiest. The third is experience, which is the bitterest." ~
            Confucius
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
