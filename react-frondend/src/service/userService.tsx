import axios from "axios"
interface InputLogin {
    username: string
    password: string
}
interface InputRegister{
    username :string
    email: string
    password:string
}
interface InputCategory{
    category :string
}
export const LoginApi = async ({ username, password }: InputLogin) => {
    try {
        const response = await axios.post('/api/login', {
            username: username,  
            password: password   
        },{
            withCredentials:true
        })
        return response.status;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};
export const regisApi = async ({username,email,password}: InputRegister) => {
    try {
        const response = await axios.post('/api/register', {
            username: username,
            email: email,  
            password: password,
        });
        return response.status
    } catch (error) {
        return error
    }
}
export const getProductRecommend = async () => {
    try {
        const response = await axios.get('/api/recommend',{
            withCredentials:true
        });
        return response.data
    } catch (error) {
        return error
    }
}
export const getProductByCategory = async ({category}:InputCategory) => {
    try {
        const response = await axios.post('/api/getDataByCategory',{
            category:category
        },{
            withCredentials:true
        });
        return response.data
    } catch (error) {
        throw error
    }
}


