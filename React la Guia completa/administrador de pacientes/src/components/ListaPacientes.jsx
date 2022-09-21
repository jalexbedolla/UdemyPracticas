/* eslint-disable react/jsx-curly-brace-presence */
const ListaPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-x-scroll'>
      <h2 className='font-bold text-3xl text-center'>Listado Pacientes</h2>
      <p className=' text-xl mt-5 mb-10 text-center '>
        Administra tus {''} <span className=' text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
    </div>
  )
}

export default ListaPacientes
