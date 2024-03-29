import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface MenuCardsProps {
  title: string;
  ingredients: string[];
  description: string;
  image: string;
}

const MenuCards = (props: MenuCardsProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image
        className="w-full"
        width={200}
        height={200}
        src={props.image}
        alt={props.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-red-500 dark:text-red-500">
          {props.title}
        </div>
        <p className="text-black dark:text-white text-base">
          {props.description}
        </p>
        <br></br>
        <Marquee>
          <ul className="text-white text-sm flex gap-2 justify-center">
            {props.ingredients.map((ingredient, index) => (
              <li className="border bg-red-600 rounded-3xl p-1" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </div>
  );
};

export default MenuCards;
