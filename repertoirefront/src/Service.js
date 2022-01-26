import Api from "./Api";

const getAll = () => {
    return Api.get('/repertoires');
}

const savePersonne = ( data ) => {
    return Api.post('/repertoire/create', data);
}

const getById = (id) => {
    return Api.get(`/repertoire/${id}`);
}

const editById = (id,data) => {
    return Api.put(`/repertoire/update/${id}`,data);
}

const deleteById = (id) => {
    return Api.delete(`/repertoire/delete/${id}`);
}

export default {getAll,getById,editById,deleteById,savePersonne};