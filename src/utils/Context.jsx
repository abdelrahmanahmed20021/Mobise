import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../api/createCampaign";

const GState = createContext();

export default function Context({ children }) {
  const [historyCamp, setHistoryCamp] = useState();
  const [scheduledCamp, setScheduledCamp] = useState();
  useEffect(() => {
    fetchData({ phase: 1, pageNumber: 3 }).then((data) => {
      setHistoryCamp((prop) => data);
    });

    fetchData({ phase: 2 }).then((data) => {
      setScheduledCamp((prop) => data);
    });
  }, []);

  return (
    <GState.Provider value={[historyCamp, scheduledCamp]}>
      {children}
    </GState.Provider>
  );
}

export const getState = () => {
  return useContext(GState);
};
