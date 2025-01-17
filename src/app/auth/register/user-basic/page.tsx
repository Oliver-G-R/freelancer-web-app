"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { FormAuth } from "../../_components/FormAuth";
import { InputForm } from "@/components/InputForm";
import { HiEnvelope, HiKey, HiMapPin, HiUser } from "react-icons/hi2";
import { CreateClient } from "@/models/User";
import { useRouter } from "next/navigation";
import { createClient } from "@/services/Client";
import { signIn } from "next-auth/react";

export default function UserBasic(){
  const route = useRouter()

  const [inputValues, setInputValues] = useState<CreateClient>({
    email: '',
    name: '',
    nameUser: '',
    password: '',
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault()
    if(!inputValues.email || !inputValues.password || !inputValues.name || !inputValues.nameUser) return

    const resp = await createClient(inputValues)

    if(resp?.error){
      return setError(resp.error)
    }

    const signInResp = await signIn('credentials', {
      email: inputValues.email,
      password: inputValues.password,
      redirect: false
    })

    if(signInResp?.error){
      setError(signInResp.error)
    }else{
      route.push('/')
    }

  }
  return (
    <FormAuth
    legendTitle="Crea una cuenta como cliente"
    handleSubmit={handleSubmit}
    btnTitle="Crear cuenta"
  >
    <InputForm
      onChange={handleChange}
      id="email"
      type="email"
      name="email"
      placeholder="jhon@example.com"
      labelTitle="Correo"
    >
      <HiEnvelope className="text-gray-400 text-2xl" />
    </InputForm>
    <InputForm
      onChange={handleChange}
      id="nameUser"
      type="text"
      name="nameUser"
      placeholder="Jhon9283"
      labelTitle="Nombre de usuario"
    >
      <HiUser className="text-gray-400 text-2xl" />
    </InputForm>
    <InputForm
      onChange={handleChange}
      id="name"
      type="text"
      name="name"
      placeholder="Jhon Sliver"
      labelTitle="Nombre completo"
    >
      <HiUser className="text-gray-400 text-2xl" />
    </InputForm>
    <InputForm
      onChange={handleChange}
      id="password"
      type="password"
      name="password"
      placeholder="******"
      labelTitle="Contraseña"
    >
      <HiKey className="text-gray-400 text-2xl" />
    </InputForm>

    {error && <p className="text-red-500 text-sm">{error}</p>}
  </FormAuth>
  )
}