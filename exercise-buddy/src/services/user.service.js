import axios from "axios";

const API_BASE=process.env.NODE_ENV==="production"
  ? process.env.REACT_APP_BASE_URL : "http://localhost:3030"

const addExercise=(exercise, id)=>{
    return axios.post(`${API_BASE}/user/${id}/plan`,{exercise:exercise},{withCredentials:true})
        .then(response=>response)
        .catch(err=>err)
}

const editExercise=(exercise,id)=>{
    return axios.post(`${API_BASE}/user/${id}/editplan`,{exercise:exercise},{withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const removeExercise=(exercise,id)=>{
    return axios.patch(`${API_BASE}/user/${id}/plan`, {exercise:exercise}, {withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const addFavorite=(exercise,id)=>{
    return axios.post(`${API_BASE}/user/${id}/favorites`, {exercise:exercise}, {withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const removeFavorite=(exercise,id)=>{
    return axios.patch(`${API_BASE}/user/${id}/favorites`, {exercise:exercise}, {withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const userService={addExercise, editExercise, removeExercise, addFavorite, removeFavorite};

export default userService;