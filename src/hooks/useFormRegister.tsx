import { useState } from "react"

export const useFormRegister = () =>{
    const [formState, setFormState] = useState(false)

    const handleFormState = () =>{
        setFormState(!formState)
    }

    return{
        formState,
        handleFormState
    }
}