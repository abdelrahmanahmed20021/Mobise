import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function GHead({ children }) {
  return (
    <Flex
      width={"100%"}
      justifyContent={"space-between"}
      padding={"10px 30px"}
      borderBottom={"1px solid"}
      borderColor={"light.400"}
    >
      {children ? (
        children
      ) : (
        <>
          <Text>Campaign Name</Text>
          <Text>Date/Time</Text>
          <Text>Status</Text>
        </>
      )}
    </Flex>
  );
}
