import axios from "axios";
const signup=(username, password, confirm)=>{
    if (password!==confirm) {
        console.log("passwords do not match")
        throw Error("Passwords do not match");
    } else{
        return axios.post(`http://localhost:3030/user/create`, {username:username,password:password})
                .then(response=>response)
                .catch(err=>console.log(err))
    }
}

const authService={signup};

export default authService;