import axios from 'axios'

 const ruta = axios.create({
    baseURL:'http://localhost:8000/tareas/api/v1/tareas/'
 })


export const getTodasTareas = () => ruta.get('/')



export const createTareas = (tarea) => ruta.post('/',tarea)


export const eliminarTareas = (id) => ruta.delete(`/${id}`)

export const getIdTareas = (id) => ruta.get(`/${id}`)

export const editarIdTareas = (id, tarea) => ruta.put(`/${id}/`,
tarea)
