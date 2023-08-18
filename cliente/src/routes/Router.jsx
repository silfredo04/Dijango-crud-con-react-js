import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react'
import { TareasListar } from '../paginas/TareasListar';
import { TareasFormulario } from '../paginas/TareasFormulario';
import {Nav} from '../componentes/Nav';
import {Toaster} from 'react-hot-toast'

export const Router = () => {
  return (
    <BrowserRouter>
        <div className='container mx-auto'>
            <Nav/>  
            <Routes>
                <Route index path='/' element={<TareasListar/>}/>
                <Route path='/tareas' element={<TareasListar/>}/>
                <Route path='/crear' element={<TareasFormulario/>}/>
                <Route path='/crear/:id' element={<TareasFormulario/>}/>
            </Routes>
        <Toaster/> 
        </div>
    </BrowserRouter>
  )
}
