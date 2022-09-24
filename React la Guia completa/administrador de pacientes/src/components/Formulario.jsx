/* eslint-disable react/jsx-curly-brace-presence */
import { useState, useEffect } from 'react'

const Formulario = () => {
  const [mascota, setMascota] = useState('')

  const handleSubmit = (e) => {
    e.preventDefaul()
    console.log('Enviando')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 text-gray-600 '>
      <h2 className='font-bold text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className=' font-bold text-xl text-center text-violet-600 mt-5 mb-10'>
        Nuevo Registro
      </p>
      <form
        onSubmit={handleSubmit}
        className=' bg-white shadow-md rounded-lg py-10 px-5 mb-10'
      >
        <div className='mb-5'>
          <label htmlFor='pet' className=' block text-violet-600 uppercase font-bold'>
            Nombre de la Mascota
          </label>
          <input
            id='pet'
            type='text'
            pceholder='pet name'
            className=' border-2 w-full p-2 mt-2 placehogray-600 rounded-md'
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />

        </div>

        <div className='mb-5'>
          <label htmlFor='owner' className=' block text-violet-600 uppercase font-bold'>
            Propietario
          </label>
          <input id='owner' type='text' placeholder='name owner' className=' border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className=' block text-violet-600 uppercase font-bold'>
            Email
          </label>
          <input id='email' type='email' placeholder='email owner' className=' border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className=' block text-violet-600 uppercase font-bold'>
            Fecha de Ingreso
          </label>
          <input id='alta' type='date' className=' border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md' />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className=' block text-violet-600 uppercase font-bold'>
            Sintomas
          </label>
          <textarea id='sintomas' className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md' placeholder='Sintomas' />
        </div>

        <input type='submit' className=' bg-violet-600 w-full p-3 text-white uppercase font-bold hover:bg-violet-800 transition-all' value='agregar' />
      </form>
    </div>
  )
}

export default Formulario
