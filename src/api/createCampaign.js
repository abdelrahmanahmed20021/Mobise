import axios from "axios";

const defaultToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaGFkeXNhbGFoN0BnbWFpbC5jb20iLCJqdGkiOiIwNGQzZmEzOC1lMTMzLTQ5NTUtOTdhNC0wMWMwOTU0NzIzMjAiLCJ1aWQiOiI1NmVjMGUwNS05YTY0LTQ2OGItODMyMS1iYTYyNTQ3Yzk5MDgiLCJDb21wYW55SWQiOiI1NmVjMGUwNS05YTY0LTQ2OGItODMyMS1iYTYyNTQ3Yzk5MDgiLCJDb21wYW55TmFtZSI6IlRBLVRlbGVjb20iLCJOYW1lIjoiSGFkeSIsIlR5cGVTZW5kaW5nIjoiMCIsImV4cCI6MTY4ODc0NzcwNX0.nO76cr-4IiuXsNfDEFZX7sovzwt9TK3lXTkO0zA6cfY";

export const getHistory = async (pageNumber, token) => {
  try {
    const response = await axios.get(
      `https://62.68.253.187/BulkSms/api/Campaigns/GetAllHisotry?PageNumber=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};

export const getScheduled = async ({ PageNumber = 1, token }) => {
  try {
    const response = await axios.get(
      `https://62.68.253.187/BulkSms/api/Campaigns/GetAllScheduled?PageNumber=${PageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
};

// Call the API functions here
export const fetchData = async ({
  token = defaultToken,
  pageNumber = 1,
  phase = 1,
}) => {
  try {
    if (phase == 1) {
      const history = await getHistory(pageNumber, token);
      return history.data.items;
    }

    if (phase == 2) {
      const scheduled = await getScheduled({ token });
      return scheduled.data.items;
    }
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

// Function to create a campaign
export const createCampaign = async ({
  campaigName,
  senderNameId,
  dateNow,
  startDate,
  message,
  listId,
  numbers,
}) => {
  const url = "https://62.68.253.187/BulkSms/api/Campaigns/AddCampaign";
  const token = defaultToken;

  try {
    const response = await axios.post(
      url,
      {
        senderNameId,
        campaigName,
        dateNow,
        startDate,
        message,
        listId,
        numbers,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating campaign:", error.message);
  }
};
