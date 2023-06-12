import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import AccordingComp from "./AccordingComp";
import GHead from "./GHead";
import { getState } from "../utils/Context";

export default function List() {
  const [historyCamp] = getState();

  return (
    <Flex flexDirection={"column"}>
      <GHead />
      {historyCamp &&
        historyCamp.map((e, i) => {
          return (
            <AccordingComp
              bg={i % 2 != 0 ? "light.600" : "transparent"}
              key={e.id}
              data={{ ...e }}
            />
          );
        })}
    </Flex>
  );
}
