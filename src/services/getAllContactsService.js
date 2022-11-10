import http from "./httpServices";

const getAllContactsService = () => {
    return http.get("/contacts");
}
 
export default getAllContactsService;