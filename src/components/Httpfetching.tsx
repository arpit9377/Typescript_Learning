import React, { useEffect, useState } from "react";

interface Istate{
 id?:number,
 title?:string,
 body?:string
}

 const Httpfetch =() =>{
  const [post, setPost] = useState<Istate[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {post.map((p)=><li key={p.id}>
        {p.id}{" "}
        {p.title}
        {p.body}
        </li>)}
    </div>
  );
}

export default Httpfetch;
