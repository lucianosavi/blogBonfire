import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import blogFetch from "../axios/config";
import ComentariosPost from "./ComentariosPost";


const Home = () => {
    
    const navigate = useNavigate();
    const [posts,setPosts] = useState([])
    const getPosts = async() => {
    
      try {
        const postResponse = await blogFetch.get("/posts")
       
        
        const data = postResponse.data;
        setPosts(data);

      } catch (error) {
        console.log(error)
      }
      
    }
  
    useEffect(() => {
        getPosts()
      
    }, [])

return (
  
  <div>
   
    
    <div className="divPost">
        
      <h1>Posts</h1>
     {posts.length === 0 ?(<p>Carregando posts....</p>) :(
        posts.map((post) => (
        <div className="post" key={post.id}>
       <button className="buttonPost"onClick={() => {
      navigate("/Comentarios")

    }} 
   >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
           
     </button>   
           </div> 

      ))
     )} 
     
    </div>
   
   <h1>Blog</h1>
   
   <p>Footer</p>
  </div>
)
}

export default Home;