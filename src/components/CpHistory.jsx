import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { LuRefreshCw } from "react-icons/lu";
import Search from "./Search";
import List from "./List";

export default function CpHistory() {
  return (
    <Flex flexDirection={"column"} gap={"30px"}>
      <Search title={"Campaigns History"} />
      <List />
    </Flex>
  );
}
