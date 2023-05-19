import axios from "axios";
const signup=(username, password, confirm)=>{
    if (password!==confirm) {
        console.log("passwords do not match")
        throw Error("Passwords do not match");
    } else{
        return axios.post(`http://localhost:3030/auth/create`, {username:username,password:password}, {withCredentials:true})
                .then(response=>response.data)
                .catch(err=>console.log(err))
    }
}

const login=(username,password)=>{
    return axios.post("http://localhost:3030/auth/login", {username:username, password:password}, {withCredentials:true})
            .then(response=>response.data)
            .catch(err=>console.log(err))
}

const logout=()=>{return axios.post("http://localhost:3030/auth/logout",{},{withCredentials:true})
                         .then(()=>{localStorage.removeItem("user")})
                         .catch(err=>err)
}

const getUser=(id)=>{
    return axios.get(`http://localhost:3030/user/${id}`, {withCredentials:true})
            .then(response=>response.data)
            .catch(err=>err)
}

const authService={signup, login, logout, getUser};

export default authService;