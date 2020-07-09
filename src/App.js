import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: "1",
    image: "https://placeimg.com/64/64/1",
    name: "나진욱",
    birthday: "940720",
    gender: "남자",
    job: "직장인",
  },
  {
    id: "2",
    image: "https://placeimg.com/64/64/2",
    name: "손예진",
    birthday: "880720",
    gender: "여자",
    job: "배우",
  },
  {
    id: "3",
    image: "https://placeimg.com/64/64/3",
    name: "원빈",
    birthday: "770720",
    gender: "남자",
    job: "존잘러",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
