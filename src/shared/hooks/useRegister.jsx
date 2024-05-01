import { useState } from "react";
import toast from 'react-hot-toast'
import { registerRequest } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const register = async(email, username, password)=> {
        setIsLoading(true)
        const user = {
          email,
          username,
          password
        }
        const response = await registerRequest(user)
        setIsLoading(false)
    
        if(response.error){
          if(response?.err?.response?.data?.errors){
            let arr = response?.err?.response?.data?.errors
            for (const error of arr) {
              return toast.error(
                error.msg
              )
            }
          }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar registrar el usuario. Intenta de nuevo.'
            )
        }
        navigate('/channels')
    }

  return {
    register, 
    isLoading
  }
}
