import { ChangeEvent, useState } from "react";


export const useForm =<T>(initialState: T) => {


    const [formData, setFormData] = useState(initialState)
    

    const onChange = ( event: ChangeEvent<HTMLInputElement> ) => {

        
        setFormData(formData => ({
            ...formData,
            // when [] it means computed property
            [event.target.name] : event.target.value

        }))
    }

    const resetFrom = () => {
        setFormData({...initialState})
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        ...formData,
        formData,

        onChange,
        resetFrom,
        isValidEmail
    }
}