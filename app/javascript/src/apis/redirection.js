import axios from "axios";

const index = () => axios.get("/redirections");
const update = (payload, id) => axios.put(`/redirections/${id}`, payload);
const destroy = id => axios.delete(`/redirections/${id}`);
const create = payload => axios.post("/redirections", payload);
const redirectionApi = {
  create,
  destroy,
  update,
  index,
};
export default redirectionApi;
