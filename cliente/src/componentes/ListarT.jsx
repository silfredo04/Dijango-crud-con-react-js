import React, { useEffect, useState } from 'react'
import {getTodasTareas} from '../api/tareas.api'
import { TareasCard } from './TareasCard';


export const ListarT = () => {
    const [tareas,SetTareas] = useState([]);

   

    useEffect(()=>{
        async function cargarTareas () {
            const res = await getTodasTareas();
            SetTareas(res.data);
        }
        cargarTareas();
    },[]);
    console.log(tareas);
  return (
    <div className='grid grid-cols-3 gap-3'>
        {tareas.map(tar =>(
            <TareasCard
            key={tar.id}
            tareas = {tar}
           />
        ))
        }
    </div>
  )
}
