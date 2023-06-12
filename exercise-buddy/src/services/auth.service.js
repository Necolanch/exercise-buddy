import axios from "axios";
const API_BASE=process.env.NODE_ENV==="production" ? process.env.REACT_APP_BASE_URL : "http://localhost:3030" 

const signup=(username, password, confirm)=>{
    if (password!==confirm) {
        console.log("passwords do not match")
        throw Error("Passwords do not match");
    } else{
        return axios.post(`${API_BASE}/auth/create`, {username:username,password:password}, {withCredentials:true})
                .then(response=>response.data)
                .catch(err=>console.log(err))
    }
}

const login=(username,password)=>{
    return axios.post(`${API_BASE}/auth/login`, {username:username, password:password}, {withCredentials:true})
            .then(response=>response.data)
            .catch(err=>console.log(err))
}

const logout=()=>{
    console.log("here")
    return axios.post(`${API_BASE}/auth/logout`,{},{withCredentials:true})
                         .then(()=>{localStorage.removeItem("user")})
                         .catch(err=>err)
}

const getUser=(id)=>{
    return axios.get(`${API_BASE}/user/${id}`, {withCredentials:true})
            .then(response=>response.data)
            .catch(err=>err)
}

const authService={signup, login, logout, getUser};

export default authService;