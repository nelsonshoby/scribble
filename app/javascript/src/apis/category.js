import axios from "axios";

const create = payload => axios.post("/categories", payload);
const index = () => axios.get("/categories");
const update = (payload, id) => axios.put(`/categories/${id}`, payload);
const destroy = id => axios.delete(`/categories/${id}`);
const sort = (id, payload) => axios.put(`/sort/${id}`, payload);
const loadCategoryAndArticle = () => axios.get("/loadCategoryAndArticle");
const categoryApi = {
  destroy,
  create,
  update,
  index,
  sort,
  loadCategoryAndArticle,
};
export default categoryApi;
