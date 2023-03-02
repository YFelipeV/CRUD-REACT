import React from 'react'

function update() {
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")

    const user={
        identificacion,
        nombre,
        apellido
    }
  return (
    <>
     


  
    
    <form>
        <h2>FORMULARIO</h2>
        <input type="text" onChange={(e)=>  setNombre(e.target.value)} placeholder='ingrese nombre' />
        <input type="text" onChange={(e) => setApellido(e.target.value)} placeholder='ingrese Apellido' />
        <button type='submit' onClick={()=>postAdmin(user)}> guardar</button>
    </form>
    
    
    
    
    
  
    
    
    
    </>
  )
}

export default update