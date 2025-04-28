import axios from "axios";

const myaxios = axios.create({
    baseUrl : "https://inventory-api.teamrabbil.com/api",
headers:{
    "content-Type": application/json,
}
});

export default myaxios;