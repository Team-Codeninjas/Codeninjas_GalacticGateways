import axios from "axios";

const localhost = "192.168.1.102";

const client = axios.create({
  baseURL: `http://${localhost}:12345/api/v1`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default client;
