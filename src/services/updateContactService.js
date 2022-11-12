import http from "./httpServices";

const updateContactService = (id,data) => {
    return http.put(`/contacts/${id}`,data);
}
 
export default updateContactService;