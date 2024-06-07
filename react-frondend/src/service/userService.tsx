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
export const testApi = async () => {
    try {
        const response = await axios.get('/api/getData',{
            withCredentials:true
        });
        return response.data
    } catch (error) {
        return error
    }
}
