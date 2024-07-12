"use client"
import { FormEvent } from "react";
import { FormAuth } from "../../_components/FormAuth";
import { InputForm } from "../../_components/InputForm";
import { HiEnvelope, HiKey, HiMapPin, HiUser } from "react-icons/hi2";

export default function UserBasic(){
  const handleSubmit = (e:FormEvent) => {}
  return (
    <FormAuth
    legendTitle="Crea una cuenta como cliente"
    handleSubmit={handleSubmit}
    btnTitle="Crear cuenta"
  >
    <InputForm
      id="email"
      type="email"
      name="email"
      placeholder="jhon@example.com"
      labelTitle="Correo"
    >
      <HiEnvelope className="text-gray-400 text-2xl" />
    </InputForm>
    <InputForm
      id="nameUser"
      type="text"
      name="nameUser"
      placeholder="Jhon9283"
      labelTitle="Nombre de usuario"
    >
      <HiUser className="text-gray-400 text-2xl" />
    </InputForm>
    <InputForm
      id="password"
      type="password"
      name="password"
      placeholder="******"
      labelTitle="Contraseña"
    >
      <HiKey className="text-gray-400 text-2xl" />
    </InputForm>
  </FormAuth>
  )
}