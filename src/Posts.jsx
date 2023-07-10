import React, {useState, useEffect} from 'react';
import Card from './Card';

export default function Posts() {
    const [post, setPost]= useState([]);
    const [search, setSearch] = useState("");
    function getData(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            let posts = [...data]
            if(post==""){
                setPost(posts)
            }

        });
    }
    getData()
    const inputHandler = (e)=>{
        let searchval = e.target.value.toLowerCase();
        setSearch(searchval);
    }
  return (
    <div>
      <div className="header">
      
      <input placeholder="Seacth" onChange={inputHandler}/>
      </div>
      <div className="card-ul">
      {post.filter((item,i)=>item.title.includes(search)).map((item,i)=>
    <Card key={item.id} title={item.title} body={item.body}/>
    )}
    <br></br>
    <h2>Completed</h2>
      </div>
    </div>
  )
}
