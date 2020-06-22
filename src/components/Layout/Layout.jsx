import React from "react";

// Chakra imports:
import { Flex } from "@chakra-ui/core";

// Component imports:
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// This component holds the header and footer component
// It also passes the childern prop which will wrap the Content components
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
