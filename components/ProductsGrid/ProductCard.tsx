import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  category,
  image,
  rating,
}) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      <Image
        className="h-52 w-full object-cover object-top aspect-square"
        src={image}
        alt={title}
        height={320}
        width={320}
      />
      <div className="p-4">
        <h2 className="text-lg font-medium dark:text-gray-100 text-gray-900 mb-2">
          {title.length > 20 ? `${title.substring(0, 20)}...` : title}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {description.length > 80
            ? `${description.substring(0, 80)}...`
            : description}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </p>
          <p className="text-base font-medium text-gray-500 dark:text-gray-300">
            {category}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(Math.floor(rating.rate))].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.103l2.928 5.957 6.545.954-4.74 4.608 1.12 6.516L10 15.789l-5.854 3.349 1.12-6.516L.527 7.014l6.545-.954L10 1.103z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            {[...Array(5 - Math.floor(rating.rate))].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.103l2.928 5.957 6.545.954-4.74 4.608 1.12 6.516L10 15.789l-5.854 3.349 1.12-6.516L.527 7.014l6.545-.954L10 1.103z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <p className="ml-2 text-base font-medium text-gray-500 dark:text-gray-300">
            ({rating.count})
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
