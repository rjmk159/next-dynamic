import axios from "axios";

const base_url = "https://browserstackhelp.freshdesk.com/api/v2/solutions";

export const getDetails = async () => {
  const response = await axios.get(`${base_url}/folders/48000607414/articles`, {
    auth: {
      username: "4RLTnqq724EvFNjJyk3b",
      password: "x",
    },
  });
  
  return response.data;
};

export const getDetailsSlug = async (id) => {
  const response = await axios.get(`${base_url}/folders/48000607414/articles`, {
    auth: {
      username: "4RLTnqq724EvFNjJyk3b",
      password: "x",
    },
  });
  const data = response.data.find((el)=>{ return el.id == id});
  return data ;
};