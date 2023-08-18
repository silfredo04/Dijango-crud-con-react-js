import React from 'react'
import { useNavigate } from 'react-router-dom'


export const TareasCard = ({tareas}) => {
    const navegar = useNavigate();
  return (
    <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer' onClick={()=>{
        navegar('/crear/'+tareas.id);
    }}>
        <h1 className='font-bold uppercase'>{tareas.titulo}</h1>
        <p className='text-slate-400'>{tareas.descripcion}</p>
    </div>
  )
}
