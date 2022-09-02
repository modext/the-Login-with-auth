import axios from "axios";



const API_URL = "https://adminstaging.airgate.ng/index.php/api/auth/login";

const register = async (userData)=>{
    const response = await axios.post(API_URL, userData)

    if (response.data) (
        localStorage.setItem('username', JSON.stringify(response.data))
    )

    return response.data
}

const authService ={
    register
}

export default  authService