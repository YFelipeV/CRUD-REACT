import { createContext, useContext, useState } from "react";
import {axiosPut,getAdmin,axiosdelete,axiosPost} from '../data/api'
export const ServicesContext = createContext();

export const usuarios = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("use");
  }
  return context;
};

export  const ServicesContextProvider = ({ children }) => {
    const[getId,setId]=useState("")
    const [data, setData] = useState([]);

    const load = async () => {
        let response = await getAdmin();
        setData(response);
        console.log(response);
      };

     
    async function loadId(id){
        setId(id)
        console.log(id)
      }
      const postAdmin = async(user)=>{
        console.log(user)
        try{
            const response =await axiosPost(user);
            console.log(response)
            setData([...data, user]);
        }catch(error){
            console.log(error)
        }
      }


      const update= async(id,newData)=>{
        try{
            const response=await axiosPut(id,newData);
            setData(data.map(item => item.id === id ? newData : item));
            console.log(response)
            
        }catch(error){
            console.log(error)
        }
        
      }

      const deleteAdmin = async(id)=>{
        console.log(id)
        try{
            const response =await axiosdelete(id);
            console.log(response)
            setData(data.filter(data2=>data2.id !== id))
        }catch(error){
            console.log(error)
        }
      }
  return (
    <ServicesContext.Provider
      value={{
        getId,
        loadId,
        update,
        load,
        data,
        deleteAdmin,
        postAdmin
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};
