import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import blogFetch from "../axios/config";
import Home from "./Home";
import axios from "axios";

const ComentariosPost = () => {

    const navigate = useNavigate();
    const [comentarios,setComentarios] = useState([])
    const getComentarios = async() => {

    try {

     const listComentarios = await blogFetch.get("/posts/[ID]/comments")
     const user = await blogFetch.get("/users")
     
     const userId = await blogFetch.get("/users/[ID]")
     
     console.log(user)

    } catch (error) {
      
    }
    }
    useEffect(() => {
      getComentarios()

    }, [])
    
return (
  <div>
    <button onClick={() => {
      navigate("/Home")

    }}      
   >
    <div>
      <h1>{comentarios}</h1>
    </div>
   </button>
   <h1>Comentarios</h1>  
   
  </div>
)
}
export default ComentariosPost