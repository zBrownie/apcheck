import axios from "axios";

const WebService = axios.create({
  baseURL: "https://www.solucoes.mobato.com.br/rest/webservice/",
});

export default WebService;
