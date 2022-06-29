import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { domainToUnicode } from "url";

interface Comments {
  postId: string;
  id: number;
  name: string;
  email: string;
  body: string;
}

const SearchComments = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Array<Comments>>([]);
  const [search, setSearch] = useState<number>();

  const searcher = (e: any) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
        console.log(comments);
      });
  }, []);

  let results = [];
  if (!search) {
    results = comments;
  } else {
    results = comments.filter((comments) =>
      comments.postId.toString().includes(search.toString())
    );
    console.log(results);
  }

  return (
    <div>
      <h2>Comentarios</h2>
      <form className="d-flex" role="search">
        <input
          value={search}
          onChange={searcher}
          type="text"
          placeholder="Buscar comentarios por Post"
          className="form-control"
        />
      </form>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr key="posts.id">
            <th>Post ID</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr>
              <td>{item.postId}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComments;
