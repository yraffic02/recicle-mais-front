import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
    //baseURL: "postgres://postgres.ssdabcxiuwvvwiypyzcz:reciclemais@aws-0-us-west-1.pooler.supabase.com:5432/postgres"
})

export class UsuarioService{
    listarTorod(){
        return axiosInstance.get("/usuario");
    }
}