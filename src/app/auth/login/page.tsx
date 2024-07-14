"use client";
import { HiEnvelope, HiKey } from "react-icons/hi2";
import { InputForm } from '@/components/InputForm';
import { FormAuth } from "../_components/FormAuth";
import { ChangeEvent, FormEvent, useState } from "react";
import { loginAction } from "@/actions/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [inputValues, setInputValues] = useState<{
    email: string,
    password: string
  }>({
    email: '',
    password: ''
  })

  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(!inputValues.email || !inputValues.password) return

    const resp = await loginAction(inputValues.email, inputValues.password)
    if(resp?.error) {
      setError(resp.error)
    }else{
      router.push('/')
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }
  return (
    <FormAuth
      legendTitle="Bienvenido nuevamente"
      btnTitle="Iniciar sesion"
      type="login"
      handleSubmit={handleSubmit}
    >
      <InputForm 
        onChange={handleInputChange}
        labelTitle="Ingresa tu Correo electronico"
        type="email" 
        name="email"
        id="email" 
        placeholder="jhon@codecrafters.com" 
          >
          <HiEnvelope className="text-gray-400 text-2xl" />
      </InputForm>
      <InputForm 
        onChange={handleInputChange}
        labelTitle="Ingresa tu Contraseña"
        type="password" 
        name="password"
        id="password" 
        placeholder="********" 
          >
          <HiKey className="text-gray-400 text-2xl" />
      </InputForm>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </FormAuth>
  )
}