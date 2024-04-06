import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
})

export class UsuarioService{
    listarTorod(){
        return axiosInstance.get("/usuario");
    }
}