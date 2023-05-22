import axios from "axios";

const addExercise=(exercise, id)=>{
    return axios.post(`http://localhost:3030/user/${id}/plan`,{exercise:exercise},{withCredentials:true})
        .then(response=>response)
        .catch(err=>err)
}

const userService={addExercise};

export default userService;