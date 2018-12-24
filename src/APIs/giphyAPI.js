import axios from "axios";

const giphyAPI = word => {
  const search = word;
  const key = "vh4RD1hn6HhW0RtzKBUOsA77vMIY1xjD";
  const limit = 30;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

  // promise オブジェクトが return されるようにする
  return axios.get(url);
};

export default giphyAPI;
