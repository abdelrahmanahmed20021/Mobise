import {
  Box,
  Button,
  CircularProgress,
  Flex,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BsChatLeftTextFill, BsFillCalendarDateFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { createCampaign, fetchData } from "../api/createCampaign";
import { convertDateFormat } from "../utils/SVF";

export default function CreateCp() {
  const [value, setValue] = useState("");
  const [value_2, setValue_2] = useState("");
  const [message, setMessage] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = startDate.toLocaleDateString("en-GB", options);
  const [loader, setLoader] = useState(false);
  const formRef = useRef(null); // Reference to the form element

  const toast = useToast();

  const handelTyping = (e) => {
    if (message > 159) {
      setMessage(e.target.value.length);
      e.target.value = e.target.value.slice(0, 160);
    }
    setMessage(e.target.value.length);
  };

  const warn = (ttl, dis, type = "warning") => {
    toast({
      title: ttl,
      description: dis,
      status: type,
      duration: 3000,
      isClosable: false,
      position: "top-right",
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const [
      inp,
      radio_1,
      radio_2,
      date,
      select_1,
      radio_3,
      radio_4,
      select_2,
      textarea,
    ] = formRef.current.elements;

    if (inp.value.length < 4 || inp.value == "") {
      warn("Invalid Compaign Name", "Please Enter Valid Compaign Name");
    } else if (value == "") {
      warn("Invalid Date", "Please Enter Valid Date");
    } else if (value_2 == "") {
      warn("Invalid List", "Please Enter Valid List");
    } else if (select_1.value == "" || select_1.value == "Select option") {
      warn("Invalid Sender Name", "Please Enter Valid Sender Name");
    } else if (
      select_2.value == "" ||
      select_2.value == "Choose from your list"
    ) {
      warn("Invalid Input", "Please choose Send to list");
    } else if (textarea.value == "") {
      warn("Invalid Campaign Message", "Please Enter Valid Campaign Message");
    } else {
      setLoader(true);
      // Call the createCampaign function
      createCampaign({
        senderNameId: 1,
        campaigName: inp.value,
        dateNow: value == "Now" ? true : false,
        startDate: value == "Now" ? null : convertDateFormat(date.value, 2),
        message: textarea.value,
        listId: 0,
        numbers: typeof select_2.value == "number" ? [null] : [select_1.value],
      })
        .then((e) => {
          if (e && e.message && e.message === "please Enter a valid Date") {
            warn("Data Appender", "Please Enter Valid Date", "error");
          } else if (e && e.message) {
            warn("Data Appender", e.message, "success");
          } else {
            warn("Data Appender", "Unknown error occurred", "error");
          }
          setLoader(false);
          formRef.current.reset();
          // Reset radio inputs
          setValue("");
          setValue_2("");
          console.log(e);
        })
        .catch((e) => {
          warn("Data Appender Error !", e.message, "error");
          setLoader(false);
        });
    }
  };

  return (
    <Flex flexDirection={"column"} width={{ base: "max-content", md: "600px" }}>
      <Heading fontWeight={"600"} padding={"30px 0"}>
        Create New Campaign
      </Heading>
      <Flex
        flexDirection={"column"}
        width={"100%"}
        paddingRight={{ base: "20px", md: "0" }}
        as={"form"}
        onSubmit={handelSubmit}
        ref={formRef} // Assign the form reference
      >
        <Box>
          <FormLabel fontSize={"1.1rem"} htmlFor="campaignName">
            Campaign Name
          </FormLabel>
          <Input
            maxWidth={"400px"}
            bg={"light.900"}
            id="campaignName"
            placeholder=""
            name="campaignName"
          />
        </Box>
        <Flex padding={"30px 0"} gap={"30px"} alignItems={"center"}>
          <RadioGroup onChange={setValue} value={value} name="radio_1">
            <Stack direction="row" display={"flex"} gap={"30px"}>
              <Radio size={"lg"} value="Now">
                Now
              </Radio>
              <Radio size={"lg"} value="Schedule">
                Schedule
              </Radio>
            </Stack>
          </RadioGroup>
          <Box
            gap={"10px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <DatePicker
                showIcon
                closeOnScroll={true}
                selected={startDate}
                name="date"
                onChange={(date) => setStartDate(date)}
                customInput={
                  <Button
                    type="button"
                    padding={"0"}
                    onClick={(e) => e.preventDefault()}
                  >
                    <BsFillCalendarDateFill size={"30px"} color="#60a3bc" />{" "}
                  </Button>
                }
              />
            </Box>
            <Text>{formattedDate}</Text>
          </Box>
        </Flex>
        <Box padding={"30px 0"}>
          <FormLabel fontSize={"1.1rem"} htmlFor="senderName">
            Sender Name
          </FormLabel>
          <Select
            maxWidth={"400px"}
            id="senderName"
            placeholder="Select option"
            bg={"light.900"}
            name="senderName"
          >
            <option value="CSIO">CSIO</option>
            <option value="MCC">MCC</option>
            <option value="MVX">MVX</option>
          </Select>
        </Box>
        <Box padding={"30px 0"}>
          <Text> Send to</Text>
          <RadioGroup onChange={setValue_2} value={value_2} name="radio_2">
            <Stack direction="row" display={"flex"} gap={"30px"}>
              <Radio size={"lg"} value="List">
                List
              </Radio>
              <Radio size={"lg"} value="Contacts">
                Contacts
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box display={"flex"} gap={"30px"} width={"100%"} alignItems={"center"}>
          <Select
            placeholder="Choose from your list"
            bg={"light.900"}
            maxWidth={"400px"}
            name="list"
          >
            <option value="ID ONE">ID ONE</option>
            <option value="ID TWO">ID TWO</option>
            <option value={1}>1</option>
            <option value={3}>3</option>
          </Select>
          <Text
            fontWeight={"600"}
            fontSize={{ base: "1rem", md: "1.1rem" }}
            cursor={"pointer"}
            color={"main.900"}
            width={{ base: "70%", md: "auto" }}
          >
            + Create a new list
          </Text>
        </Box>

        <Box padding={"30px 0"}>
          <Flex
            padding={"10px 0"}
            justifyContent={"space-between"}
            flexDir={{ base: "column", md: "row" }}
            gap={"20px"}
          >
            <Text fontWeight={"600"} fontSize={"1.1rem"} htmlFor="opt_1">
              Campaign Message
            </Text>
            <Text alignSelf={"flex-end"} fontSize={".9rem"}>
              {message} Message - 160 remaining characters
            </Text>
          </Flex>
          <Textarea
            height={{ base: "150px", md: "120px" }}
            bg={"light.900"}
            placeholder="Please not one message counter is (160 English and 70 Arabic) more message counter calculated such that starting from the first message each message is 153 English characters 67 if other languages"
            onInput={(e) => {
              handelTyping(e);
            }}
            name="campaignMess"
          />
        </Box>
        <Button
          type="submit"
          backgroundImage={"linear-gradient(to right, main.900, main.800)"}
          color={"light.900"}
          transition={".3s ease"}
          _hover={{ bg: "main.900" }}
          display={"flex"}
          gap={"30px"}
          isActive={loader}
          pointerEvents={loader ? "none" : "all"}
        >
          <Text>Create Campaign</Text>
          <CircularProgress
            size={"30px"}
            display={!loader ? "none" : "block"}
            isIndeterminate
            color="main.900"
          />
        </Button>
      </Flex>
    </Flex>
  );
}
