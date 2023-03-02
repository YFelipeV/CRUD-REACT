
import { useEffect, useState } from "react";
import {usuarios} from '../context/contexto'
import crear from "../assets/icons/crear.png";
import borrar from "../assets/icons/botebasura.png";
import editar from "../assets/icons/editar.png";
import Modal from "../components/Modal";
import Actualizar from "../components/Actualizar";



function List() {
    const{loadId,load,data,deleteAdmin}=usuarios()
  

  
  useEffect(() => {
    
    load();
  }, []);
  return (
    <div
      className="App d-flex justify-content-center align item-center align-items-center  "
      style={{ height: "600px" }}
    >
      <table
        className=" table table-striped w-50 "
        border={3}
        style={{ borderSpacing: "10px" }}
      >
        <thead className="bg-dark text-light">
          <tr>
            <th >Nombre</th>
          
            <th >Apellido </th>
          
            <th colSpan={3}>Opciones</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.nombre}</td>
              <td>{data.apellido}</td>
              <td>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={crear} width="30" alt="" />
                </button>
              </td>
              <td>
                <button data-bs-toggle="modal" data-bs-target="#actualizarModal"  onClick={()=> loadId(data.id)}>
                  <img src={editar} width="30" alt="" />
                </button>
              </td>
              <td>
                <button onClick={() => deleteAdmin(data.id)}>
                  <img src={borrar} width="30" alt="" />
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal/>
      <Actualizar/> 
     
    </div>
  );
}

export default List;
