import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";
function App() {
  // react er component
  const actors = ["SRK", "Salman", "Saakib", "Amir", "Firoz"];

  const singers = [
    { id: 1, name: "Argit sing", age: 36 },
    { id: 2, name: "Atif aslam", age: 35 },
    { id: 3, name: "Siya gosal", age: 32 },
    { id: 4, name: "Kk", age: 46 },
  ];

  const books = [
    {id:1, name: 'Physics', price: 120},
    {id:2, name: 'Chemistry', price: 320},
    {id:3, name: 'Math', price: 220},
    {id:4, name: 'Biology', price: 100},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      <Actor name="Bappa Raz"></Actor>

      {/* Map */}

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}


      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="34000"></Device>
      <Device name="Mobile" price="14000"></Device>
      <Device name="Watch" price="3000"></Device>
      <Person></Person>
      <Student name="Sohag" university="BU"></Student>
      <Student name="Saymon" university="UB"></Student>
      <Student name={12} university="N/A"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  return (
    <h2>
      This is a: {props.name}. Price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 23;
  const money = 500;
  const person = { name: "Sohag", isStudent: true };
  return (
    <h3>
      I am {person.name}. I am {age} years old. I have {money} taka. Sum:{" "}
      {age + money}
    </h3>
  );
}

const person = {
  name: "Sohag",
  isStudent: true,
  university: "University of Barishal",
};

function Student({ name = "N/A", university = "N/A" }) {
  return (
    <div className="student">
      <h3>This is a student.</h3>
      <p>Name: {name}</p>
      <p>University: {university}</p>
    </div>
  );
}

function Developer() {
  const devStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid blue",
    borderRadius: "20px",
  };
  return (
    <div style={devStyle}>
      <h5>Web developer</h5>
      <p>Coding: JavaScript</p>
    </div>
  );
}

export default App;
