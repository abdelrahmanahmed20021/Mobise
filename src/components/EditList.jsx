import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { convertDateFormat } from "../utils/SVF";

export default function EditList({ date, bg }) {
  return (
    <Flex justifyContent={"space-between"} padding={"20px"} bg={bg}>
      <Text>XZY Campaign</Text>
      <Text textAlign={"end"} width={"400px"}>
        {convertDateFormat(date, 1)}
      </Text>
      <Flex gap={"60px"}>
        <Flex
          alignItems={"center"}
          gap={"10px"}
          justifyContent={"center"}
          as={"button"}
          color={"main.900"}
        >
          <Text fontSize={"1.1rem"} fontWeight={"600"}>
            Edit
          </Text>
          <MdEdit size={"22px"} />
        </Flex>
        <Flex
          alignItems={"center"}
          gap={"10px"}
          justifyContent={"center"}
          as={"button"}
          color={"main.900"}
        >
          <Text fontSize={"1.1rem"} fontWeight={"600"}>
            Delete
          </Text>
          <MdDeleteSweep size={"22px"} />
        </Flex>
      </Flex>
    </Flex>
  );
}
