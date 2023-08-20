import client from "./client";

async function wrapper(requestFunction) {
  const result = {
    data: null,
    error: "",
    errorType: "",
  };

  try {
    result.data = (await requestFunction).data;
  } catch (error) {
    if (error.response) {
      result.errorType = "response";
      result.error = error.response.data.message;
    } else if (error.request) {
      result.errorType = "request";
      result.error = "Network error. Please check your internet connection and ty again.";
    } else {
      result.errorType = "internal";
      request.error = "Something went wrong. Please try again later.";
    }
  }

  return result;
}

const api = {
  // add your api here
  getSpacePorts: () => wrapper(client.get("/spaceports")),
};

export default api;
