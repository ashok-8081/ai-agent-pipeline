import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-agent-pipeline.onrender.com",
});

export default api;