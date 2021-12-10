import axios from "axios";

const index = () => axios.get("/articles");
const create = payload => axios.post("/articles", payload);
const show = id => axios.get(`/articles/${id}`);
const update = (payload, id) => axios.put(`/articles/${id}`, payload);
const destroy = id => axios.delete(`/articles/${id}`);
const fetchData = slug => axios.get(`articles/fetchData/${slug}`);
const articleApi = {
  index,
  create,
  show,
  update,
  destroy,
  fetchData,
};
export default articleApi;
