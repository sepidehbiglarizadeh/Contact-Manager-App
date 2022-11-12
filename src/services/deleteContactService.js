import http from "./httpServices";

const deleteContactService = (id) => {
    return http.delete(`/contacts/${id}`);
}
 
export default deleteContactService;