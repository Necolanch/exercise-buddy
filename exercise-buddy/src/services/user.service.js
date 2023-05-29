import axios from "axios";

const addExercise=(exercise, id)=>{
    return axios.post(`http://localhost:3030/user/${id}/plan`,{exercise:exercise},{withCredentials:true})
        .then(response=>response)
        .catch(err=>err)
}

const editExercise=(exercise,id)=>{
    return axios.post(`http://localhost:3030/user/${id}/editplan`,{exercise:exercise},{withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const removeExercise=(exercise,id)=>{
    return axios.patch(`http://localhost:3030/user/${id}/plan`, {exercise:exercise}, {withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const addFavorite=(exercise,id)=>{
    return axios.post(`http://localhost:3030/user/${id}/favorites`, {exercise:exercise}, {withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const removeFavorite=(exercise,id)=>{
    return axios.patch(`http://localhost:3030/user/${id}/favorites`, {exercise:exercise}, {withCredentials:true})
    .then(response=>response)
    .catch(err=>err)
}

const userService={addExercise, editExercise, removeExercise, addFavorite, removeFavorite};

export default userService;