import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuRefreshCw } from "react-icons/lu";

export default function Search({ title }) {
  return (
    <Box>
      <Heading fontWeight={"600"} padding={"30px 0"}>
        {title}
      </Heading>
      <Stack spacing={4}>
        <InputGroup width={{ base: "90%", md: "400px" }}>
          <Input
            bg={"light.900"}
            placeholder="Search with campaign name"
            borderRadius={"30px"}
            border={"1px solid gray"}
          />
          <InputRightElement right={"2%"}>
            <FiSearch size={"24px"} color="gray" />
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Flex justifyContent={"flex-end"} alignItems={"center"} gap={"10px"}>
        <Button
          onClick={() => location.reload()}
          color={"main.900"}
          display={"flex"}
          gap={"10px"}
        >
          <LuRefreshCw size={"20px"} />
          <Text fontSize={{ base: "1rem", md: "1.3rem" }}>Refresh</Text>
        </Button>
      </Flex>
    </Box>
  );
}
