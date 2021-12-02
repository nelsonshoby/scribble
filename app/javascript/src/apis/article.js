import axios from "axios";

const index = () => axios.get("/articles");
const create = payload => axios.post("/articles", payload);
const articleApi = {
  index,
  create,
};
export default articleApi;
