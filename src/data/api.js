import axios from 'axios'


export const axiosPost= async(user )=>{
    console.log(user)
   
     await axios.post(`http://localhost:3000/administradores`,user)
}

export const axiosPut= async(id, user )=>{
    console.log(user)
     await axios.put(`http://localhost:3000/administradores/${id}`,user)
}


export const axiosdelete= async(id)=>{
    console.log(id)
     await axios.delete(`http://localhost:3000/administradores/${id}`)
}



export const getAdmin = async () => {
  try {
    const response = await fetch("http://localhost:3000/administradores");
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const postAdmin = async ({ nombre, apellido }) => {
//   try {
    
//     const data = { nombre, apellido };
//      const respuesta=await fetch("http://localhost:3000/administradores",
      
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
      
//         body: JSON.stringify(data)
//       }
//     );
//     console.log(respuesta)
//   } catch (error) {
//     console.log(error);
//   }
// };


export const putAdmin = async ({id, nombre, apellido }) => {
    try {
      
      const data = { nombre, apellido };
       const respuesta=await fetch(`http://localhost:3000/administradores/${id}`,
        
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        
          body: JSON.stringify(data)
        }
      );
      console.log(respuesta)
    } catch (error) {
      console.log(error);
    }
  };
  

//     export const deleteAdmin = async (id) => {
//     try {
//       const respuesta = await fetch(`http://localhost:3000/administradores/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
      
      
//       console.log(respuesta);
      
//     } catch (error) {
//       console.error(error);
//     }
//   };
  