import axios from "axios";
const signup=(username, password, confirm)=>{
    if (password!==confirm) {
        console.log("passwords do not match")
        throw Error("Passwords do not match");
    } else{
        return axios.post(`http://localhost:3030/auth/create`, {username:username,password:password})
                .then(response=>response.data)
                .catch(err=>console.log(err))
    }
}

const login=(username,password)=>{
    return axios.post("http://localhost:3030/auth/login", {username:username, password:password})
            .then(response=>response.data)
            .catch(err=>console.log(err))
}

const authService={signup, login};

export default authService;