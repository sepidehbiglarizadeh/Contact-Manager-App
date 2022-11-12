import http from "./httpServices";

const addNewContactService = (data) => {
    return http.post("/contacts",data);
}
 
export default addNewContactService;