import axios from "axios";

const index = () => axios.get("/articles");
const create = payload => axios.post("/articles", payload);
const show = id => axios.get(`/articles/${id}`);
const update = (payload, id) => axios.put(`/articles/${id}`, payload);
const articleApi = {
  index,
  create,
  show,
  update,
};
export default articleApi;
