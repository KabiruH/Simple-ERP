import axios from "axios";
import Cookies from "js-cookie";

export const callBackendApi = async ({ method, data, params, query, url }) => {
  const userToken = Cookies.get("userToken");
  const res = await axios({
    method,
    data,
    query,
    params,
    headers: {
      Authorization: userToken || null,
    },
    url: `http://localhost:5000${url}`,
  });
  return res;
};
