"use client";
import { useEffect, useState } from "react";
import MenuCards from "./components/MenuCards";

interface CoffeeDataType {
  id: number;
  ingredients: string[];
  title: string;
  description: string;
  image: string;
}

export default function App() {
  const [data, setData] = useState<CoffeeDataType[]>([]);
  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await resp.json();
    setData(json);
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((coffee) => (
        <MenuCards
          key={coffee.id}
          title={coffee.title}
          description={coffee.description}
          ingredients={coffee.ingredients}
          image={coffee.image}
        />
      ))}
    </div>
  );
}
