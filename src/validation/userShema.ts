import * as yup from "yup";

export interface IUser {
    id?: string,
    name: string,
    email: string,
    password: string,
    avatar: string
}

export const schemaRegisterUser = yup.object().shape({
    name: yup.string().required("O nome é obrigatório."),
    email: yup.string().email("O e-mail deve ser válido.").required("O e-mail é obrigatório."),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres.").required("A senha é obrigatória."),
    avatar: yup.string()
});
  