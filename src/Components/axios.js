import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-oct-7ce34.cloudfunctions.net/api",

  //"http://localhost:5001/oct-7ce34/us-central1/api", //localhost
});

export default instance;
