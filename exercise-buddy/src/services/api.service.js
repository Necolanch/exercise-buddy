import axios from "axios"

const normal=(url)=>{
    return axios.get(url, {headers:{"x-api-key":"wBirvc+F8BxhWMBNNx8VAw==GLi5ZvgDy0nSB3LH"}})
            .then(response=>response)
            .catch(err=>err)
}

const apiService={normal}

export default apiService