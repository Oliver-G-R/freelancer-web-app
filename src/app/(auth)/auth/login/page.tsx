"use client";
import { HiEnvelope, HiKey } from "react-icons/hi2";
import { InputForm } from '../_components/InputForm';
import { FormAuth } from "../_components/FormAuth";
import { FormEvent } from "react";

export default function Login() {
  const handleSubmit = (e: FormEvent) => {}
  return (
    <FormAuth
      legendTitle="Bienvenido nuevamente"
      btnTitle="Iniciar sesion"
      type="login"
      handleSubmit={handleSubmit}
    >
      <InputForm 
          labelTitle="Ingresa tu Correo electronico"
          type="email" 
          name="email"
          id="email" 
          placeholder="jhon@codecrafters.com" 
          >
          <HiEnvelope className="text-gray-400 text-2xl" />
      </InputForm>
      <InputForm 
          labelTitle="Ingresa tu Contraseña"
          type="password" 
          name="password"
          id="password" 
          placeholder="********" 
          >
          <HiKey className="text-gray-400 text-2xl" />
      </InputForm>
    </FormAuth>
  )
}