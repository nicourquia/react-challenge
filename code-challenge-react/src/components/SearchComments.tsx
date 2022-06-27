import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
        console.log(comments);
      });
  }, []);

  return (
    <div>
      {/* <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar"
        className="form-control"
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr key="posts.id">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td></td>
              <td></td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default SearchComments;
