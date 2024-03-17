import { useState, useEffect } from 'react';

const DEFAULT_URL = "http://localhost:5000/users";

async function fetchPosts(url) {
  const response = await fetch(url);
  const blogPosts = await response.json();
  return blogPosts;

}

function FetchUseEffect2() {
 
  const [urlUsuario, setUrlUsuario] = useState(DEFAULT_URL)
  const [datosUsuario, setDatosUsuario] = useState([])

  const [loadedPosts, setLoadedPosts] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(function(){
    fetchPosts(DEFAULT_URL).then((fetchedPosts) =>setLoadedPosts(fetchedPosts));
  },[DEFAULT_URL])

  useEffect(function () {
    fetchPosts(urlUsuario).then((fetchedPosts) => setDatosUsuario(fetchedPosts));
  }, [urlUsuario]);
  
  function cambiarUrl(id){
    setUrlUsuario(DEFAULT_URL + "?id=" + id)
    setFlag(true)
  }

  return (

    <>
      <ul >
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.name} <button onClick={()=>{
            cambiarUrl(post.id)
          }
          }>Mostrar datos</button></li>
        ))
        }
      </ul>
      {flag === true && <><ul>
        
        {datosUsuario.map((post) =>(
        <><li key={post.name}>{post.name}</li>
        <li>{post.phone}</li>
        <li>{post.email}</li></>
      ))}
        </ul></> }
      
      </>
      
      
  


  );

}

export default FetchUseEffect2;