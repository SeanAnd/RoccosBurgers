import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerreactproj.firebaseio.com/"
});

export default instance;
