import React, { useState, useEffect } from "react";
import Card from "./Card";
import './Card.css'
export default function Posts() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        let posts = [...data];
        setPost(posts);
      });
  }

  const inputHandler = (e) => {
    let searchVal = e.target.value.toLowerCase();
    setSearch(searchVal);
  };

  const searchHandler = () => {
    const filteredPosts = post.filter((item) =>
      item.title.toLowerCase().includes(search)
    );
    setPost(filteredPosts);
  };

  return (
    <div>
      <div className="header">
        <input placeholder="Search" onChange={inputHandler} />
        <button type="submit" className="btn" onClick={searchHandler}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="card-ul">
        {post.map((item) => (
          <Card key={item.id} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  );
}
