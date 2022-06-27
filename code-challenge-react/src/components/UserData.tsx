import React, { useState, useEffect } from "react";
import { isTemplateExpression } from "typescript";
import { Card, ListGroup } from "react-bootstrap";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserData = function () {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<Array<Users>>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
        console.log(users);
      });
  }, []);

  return (
    <div>
      <h1>{isLoading ? "Cargando..." : "Users"}</h1>
      <div className="container d-flex flex-wrap">
        {users.map((item) => (
          <Card style={{ width: "20.25rem" }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle>{item.username}</Card.Subtitle>
              <Card.Text>{item.email}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{item.id}</ListGroup.Item>
              <ListGroup.Item>{item.address?.street}</ListGroup.Item>
              <ListGroup.Item>{item.phone}</ListGroup.Item>
              <ListGroup.Item>{item.website}</ListGroup.Item>
            </ListGroup>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserData;
