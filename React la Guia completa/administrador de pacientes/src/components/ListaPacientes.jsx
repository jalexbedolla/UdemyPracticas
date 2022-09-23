/* eslint-disable no-unused-vars */
import Paciente from './Paciente'

/* eslint-disable react/jsx-curly-brace-presence */

const ListaPacientes = () => {
  return (
    <div className=' text-gray-600 md:w-1/2 lg:w-3/5 md:h-screen overflow-x-scroll'>
      <h2 className='font-bold text-3xl text-center'>Listado de Pacientes</h2>
      <p className=' font-bold text-xl text-center text-violet-600 mt-5 mb-10 '>
        Pacientes y Citas
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  )
}

export default ListaPacientes
