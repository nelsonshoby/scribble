import axios from "axios";

const index = () => axios.get("/articles");
const articleApi = {
  index,
};
export default articleApi;
