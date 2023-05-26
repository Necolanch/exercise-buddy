import axios from "axios";

const addExercise=(exercise, id)=>{
    return axios.post(`http://localhost:3030/user/${id}/plan`,{exercise:exercise},{withCredentials:true})
        .then(response=>response)
        .catch(err=>err)
}

const editExercise=(exercise,id)=>{
    return axios.post(`http://localhost:3030/user/${id}/editplan`,{exercise:exercise},{withCredentials:true})
    .then(response=>console.log(response))
    .catch(err=>err)
}

const userService={addExercise, editExercise};

export default userService;