import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {createTareas,eliminarTareas,getIdTareas,editarIdTareas} from '../api/tareas.api';
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-hot-toast'

export const TareasFormulario = () => {

    const {register,handleSubmit, formState:{
        errors
    },setValue} = useForm();

    const navegar = useNavigate();

    const {id} = useParams();
    console.log(id);

    const enviar = handleSubmit(async data =>{
        if(id){
           const respu =  await editarIdTareas(id,data);
           if(respu.status == 200){
            navegar('/');
            }
        }else{
            const respuesta = await createTareas(data);
            if(respuesta.status == 201){
                toast.success('Guardado!',{
                    position:'top-center',
                    style:{
                        background:"#567893",
                        color:"#fff",
                    }
                })
                navegar('/');
            }
        }
    })

    useEffect(()=>{
        async function getId(){
            const res = await getIdTareas(id);
            setValue('titulo',res.data.titulo);
            setValue('descripcion',res.data.descripcion);
        }
        if(id){
            getId();
        }
    },[]);



  return (
    <div className='max-w-xl mx-auto'>
        <form onSubmit={enviar}>
            <input 
                type="text" 
                placeholder='Titulo' 
                {...register("titulo",{required:true})}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
            />
            {errors.titulo && <span>Este campo es requerido</span>}
            <textarea 
                rows="3" 
                placeholder='Description'
                {...register("descripcion",{required:true})}
                className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
            />
            {errors.description && <span>Este campo es requerido</span>}
            {!id ? <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Save</button>:
                    <div className='flex justify-end'>
                        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Editar</button>
                        <button 
                        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                        onClick={async() => {
                            const aceptar = window.confirm('Seguro que deseas eliminar?')
                            if(aceptar){
                                await eliminarTareas(id);
                                navegar('/');
                            }
                        }}>Eliminar</button>
                    </div>
            }
        </form>
    </div>
  )
}
