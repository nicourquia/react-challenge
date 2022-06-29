import React, { useState, useEffect } from "react";
import { domainToUnicode } from "url";

interface Posts {
  userId: string;
  id: number;
  title: string;
  body: string;
}

const SearchPost = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Array<Posts>>([]);
  const [search, setSearch] = useState<number>();

  const searcher = (e: any) => {
    setSearch(e.target.value);
  };

  console.log(search);

  let results = [];
  if (!search) {
    results = posts;
  } else {
    results = posts.filter((post) =>
      post.id.toString().includes(search.toString())
    );
    console.log(results);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
        console.log(posts);
      });
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar post por ID"
        className="form-control"
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr key="posts.id">
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPost;
