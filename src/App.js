import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Card from "./card";
import data from "./data";

export default function App() {
  const cards = data.map(item =>{
    return(
      <Card
    key = {item.id}
    item = {item}
    />

    )
  })
  return (
    <div>
    <Navbar />
    <Hero />
    <section className="cards-list">
                {cards}
            </section>
    </div>

  );
}

