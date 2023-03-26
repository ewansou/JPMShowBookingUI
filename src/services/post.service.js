import axios from "axios";

/* const getAdminRetrieveShows = () => {
  const URL = "http://localhost:23008/admin/api/retrieveShows";
  const reqURL = URL;
  return axios.post(reqURL, {
    //no data posted
  });
}; */

/* axios.get("http://localhost:23008/admin/api/retrieveShows")
.then(({ data }) => {
    updateShowDetails(data);
}) */

const getAdminRetrieveShows = () => {
  console.log("making get request");
  const URL = "https://localhost:23008/admin/api/retrieveShows";
  return axios.get(URL).then(res => res.data);
  //console.log(res.data);
  //return res;

};

const PostService = {
  getAdminRetrieveShows,
};

export default PostService;


/* const getQRimage = (amount) => {
  //const URL = "http://localhost:6868/api/payment/";
  const URL = "https://pbqr-server.herokuapp.com/api/payment/";
  const reqURL = URL + amount;
  return axios.post(reqURL, {
    //no data posted
  });
}; */