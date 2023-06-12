import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Search from "./Search";
import GHead from "./GHead";
import EditList from "./EditList";
import { getState } from "../utils/Context";

export default function SchCampaign() {
  const [historyCamp, scheduledCamp] = getState();

  return (
    <Flex flexDirection={"column"} gap={"30px"}>
      <Search title="Scheduled Campaigns" />
      <Flex flexDirection={"column"} fontWeight={"600"}>
        <GHead>
          <Text>Campaign Name</Text>
          <Text>Date/Time</Text>
          <Text>Update</Text>
        </GHead>
        {scheduledCamp &&
          scheduledCamp.map((e, i) => {
            return (
              <EditList
                bg={i % 2 != 0 ? "light.600" : "transparent"}
                key={e.id}
                date={e.creationDate}
              />
            );
          })}
      </Flex>
    </Flex>
  );
}
