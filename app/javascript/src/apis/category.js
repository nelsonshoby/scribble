import axios from "axios";

const create = payload => axios.post("/categories", payload);
const index = () => axios.get("/categories");
const categoryApi = {
  create,
  index,
};
export default categoryApi;
