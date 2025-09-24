import { Card } from "flowbite-react";
import { MovieInterface } from "../interfaces/Movie";

export function MovieCard({ movie }: { movie: MovieInterface }) {
  const cardProps = {
    className: "max-w-sm",
    imgAlt: `${movie.name} Cover`,
    imgSrc: movie.image || "https://www.envirochoice.com.au/Images/ProductImages/product-image-1.png"
    //...(movie.image && { imgSrc: movie.image }),
  };

  return (
    <Card {...cardProps} onClick={() => console.log(movie)}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {movie.name}
      </h5>
      {movie.description ?? (
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {movie.description}
        </p>
      )}
    </Card>
  );
}
