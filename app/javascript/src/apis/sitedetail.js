import axios from "axios";

const update = payload => axios.put("/site_details", payload);
const show = () => axios.get("/site_details");
const sitedetailApi = {
  update,
  show,
};
export default sitedetailApi;
