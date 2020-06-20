import React from "react";

// Chakra imports:
import { Flex } from "@chakra-ui/core";

// Component imports:
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Flex justify="center"  align="center" p={50}>
        {props.children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
