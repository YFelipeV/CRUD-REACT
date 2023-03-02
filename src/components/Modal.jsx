import {useState} from "react";

import {usuarios} from '../context/contexto'

function Modal() {
    const{postAdmin}=usuarios()
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")

    const user={
        nombre,
        apellido
    }
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Formulario
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
              className="form-control"
                type="text"
                onChange={(e) => setNombre(e.target.value)}
                placeholder="ingrese nombre"
              />
              <input
                type="text"
                className="form-control my-4"
                onChange={(e) => setApellido(e.target.value)}
                placeholder="ingrese Apellido"
              />
              
            </div>
            <div className="modal-footer d-flex justify-content-center">
              
              <button type="button" onClick={() => postAdmin(user)} className="btn btn-primary w-50">
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
