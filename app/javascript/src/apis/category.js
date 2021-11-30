import axios from "axios";

const create = payload => axios.post("/categories", payload);
const categoryApi = {
  create,
};
export default categoryApi;
