import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaPacientes from './components/ListaPacientes'

function App() {
  

  return (
    <div className='container mx-auto mt-5'>
     <Header />
     <Formulario />
     <ListaPacientes /> 
    </div>
  )
}

export default App
