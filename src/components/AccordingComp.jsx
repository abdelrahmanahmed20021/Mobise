import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { convertDateFormat } from "../utils/SVF";

export default function AccordingComp({ data ,bg}) {
  const {
    campaigName,
    campaignType,
    creationDate,
    delivered,
    failed,
    id,
    message,
    pending,
    recipientCount,
    senderName,
    startDate,
    status,
    totalCharacters,
    totalMessages,
  } = data;
  return (
    <Accordion allowToggle>
      <AccordionItem bg={bg}>
        <h2>
          <AccordionButton>
            <AccordionIcon />
            <Flex
              as="span"
              justifyContent={"space-between"}
              flex="1"
              textAlign="left"
            >
              <Text fontWeight={"600"}>XYZ Campaign</Text>
              <Text fontWeight={"600"}>
                {convertDateFormat(creationDate, 1)}
                {/* <Text as={"span"} padding={"0 30px"}>
                  {date}
                </Text> */}
              </Text>
              <Flex alignItems={"center"} gap={"10px"} fontWeight={"600"}>
                <Text>{status == 1 ? "Finished" : "Active"}</Text>
                <Box
                  width={"15px"}
                  height={"15px"}
                  borderRadius={"50%"}
                  bg={status == 1 ? "green" : "main.800"}
                ></Box>
              </Flex>
            </Flex>
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} bg={"light.600"}>
          <Flex padding={"4px 0"} alignItems={"center"}>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Campaign Name: {campaigName}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Sender Name :{senderName}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Campaign Type: {campaignType}
            </Text>
          </Flex>
          <Flex padding={"4px 0"} alignItems={"center"}>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Frequency : {1}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Total Characters : {totalCharacters}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Delivered: {delivered}
            </Text>
          </Flex>
          <Flex padding={"4px 0"} alignItems={"center"}>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Creation Date : {convertDateFormat(creationDate, 1)}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Recipient Count: {recipientCount}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Pending: {pending}
            </Text>
          </Flex>
          <Flex padding={"4px 0"} alignItems={"center"}>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Start Date:{convertDateFormat(startDate, 1)}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Total SMS : {totalMessages}
            </Text>
            <Text
              textAlign={"start"}
              padding={"4px"}
              fontWeight={"600"}
              width={"100%"}
            >
              Failed: {failed}
            </Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
