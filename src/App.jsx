import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CreateCp from "./components/CreateCp";
import "./App.css";
import CpHistory from "./components/CpHistory";
import SchCampaign from "./components/SchCampaign";

export default function App() {
  const opt = ["Create Campaign", "Campaign History", "Scheduled Campaign"];
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Tabs
      variant="enclosed"
      padding={"10px"}
      onChange={(e) => setActiveSlide(e)}
    >
      <TabList>
        {opt.map((e, i) => (
          <Tab
            fontWeight={"600"}
            fontSize={{ base: ".9rem", md: "1.3rem" }}
            bg={i == activeSlide ? "transparent" : "main.900"}
            color={i == activeSlide ? "main.900" : "light.900"}
            key={i}
            borderWidth={"3px"}
            borderBottom={"0"}
          >
            {e}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        <TabPanel>
          <CreateCp />
        </TabPanel>
        <TabPanel>
          <CpHistory />
        </TabPanel>
        <TabPanel>
          <SchCampaign />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
