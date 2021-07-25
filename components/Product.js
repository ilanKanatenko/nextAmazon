import Image from "next/image";

import dynamic from "next/dynamic";
import Currency from "react-currency-formatter";
import PrimeImage from "../public/Prime-tag.png";
import { useEffect, useState } from "react";

const Product = ({ product }) => {
  const { id, title, price, description, category, image } = product;
  const starRating = Math.floor(Math.random() * 5) + 1;
  const hasPrimer = Math.random() < 0.5;
  const [hasPrime, setHasPrime] = useState(false);

  // with out this react throws error that svg shouldn't be there
  const DynamicHiStar = dynamic(() =>
    import("react-icons/hi").then((mod) => mod.HiStar)
  );

  useEffect(() => {
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 italic text-gray-400 text-xs">
        {category}
      </p>
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(starRating)
          .fill()
          .map((_, index) => (
            <DynamicHiStar key={index} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency
          quantity={price} // Required
        />
      </div>
      {hasPrime && <p>hi</p>}

      <button className="btn">Add to Basket</button>
    </div>
  );
};

export default Product;
