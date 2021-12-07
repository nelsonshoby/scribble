import axios from "axios";

const create = payload => axios.post("/categories", payload);
const index = () => axios.get("/categories");
const update = (payload, id) => axios.put(`/categories/${id}`, payload);
const destroy = id => axios.delete(`/categories/${id}`);
const categoryApi = {
  destroy,
  create,
  update,
  index,
};
export default categoryApi;
