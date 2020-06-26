import axios from "axios";
import createHeaders from "./headers.js";

const getRequests = async (dispatch, category, coords) => {
  try {
    const response = await axios.get("/requests", {
      params: {
        category: category,
        "coordinates[lat]": coords.lat,
        "coordinates[long]": coords.long
      },
      headers: createHeaders(),
    });
    dispatch({
      type: "GET_REQUESTS",
      payload: {
        requests: response.data.requests,
      },
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getMyRequests = async () => {
  try {
    const response = await axios.get("/my_request/requests", {
      headers: createHeaders(),
    });
    return response.data.requests;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getMyQuests = async () => {
  try {
    const response = await axios.get("/my_request/quests", {
      headers: createHeaders(),
    });
    return response.data.quests;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getSingleRequest = async (id) => {
  try {
    const response = await axios.get(`/my_request/requests/${id}`, {
      headers: createHeaders(),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getSingleQuest = async (id) => {
  try {
    const response = await axios.get(`/my_request/quests/${id}`, {
      headers: createHeaders(),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getRequests, getMyRequests, getMyQuests, getSingleRequest, getSingleQuest };
