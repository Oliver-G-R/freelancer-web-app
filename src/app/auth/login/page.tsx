import Link from "next/link";
import { HiEnvelope, HiKey } from "react-icons/hi2";

export default function Login() {
  return (
    <>
      <form>
        <fieldset>
          <legend className="text-2xl text-center mb-4 text-gray-400 font-semibold">
            Bienvenido nuevamente
          </legend>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="email">
                Ingresa tu Correo electronico
              </label>
              <div className="hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden flex items-center px-3">
                <HiEnvelope className="text-gray-400 text-2xl" />
                <input 
                  className="w-full outline-0 px-4 py-2 "
                  type="email" 
                  name="email"
                  id="email" 
                  placeholder="jhon@codecrafters.com" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="password">
                Ingresa tu contraseña
              </label>
              <div className="hover:border-purple-300 border-[1.5px]  transition border-gray-400 rounded-md overflow-hidden flex items-center px-3">
                <HiKey className="text-gray-400 text-2xl" />
                <input 
                  className="w-full outline-0 px-4 py-2 "
                  type="password" 
                  name="password"
                  id="password" 
                  placeholder="********" 
                />
              </div>
            </div>
          </div>

          <button className="text-xl text-center bg-[--color-secondary] text-white rounded-md w-full p-2">
            Iniciar sesion
          </button>
        </fieldset>
      </form>

      <div className="flex flex-col items-center border-t-[1.3px] border-gray-400 w-full mt-6 pt-4">
          <span className="">
            No tienes cuenta?  <Link href="/auth/register/type-account" className="text-blue-500">Registrate</Link>
          </span>
      </div>
    </>
  )
}