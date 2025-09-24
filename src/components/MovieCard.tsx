import { Button, Card } from "flowbite-react";
import { MovieInterface } from "../interfaces/Movie";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";
import { BiEdit } from "react-icons/bi";

export function MovieCard({ movie }: { movie: MovieInterface }) {
  const user = useSelector((state: RootState) => state.user)

  const cardProps = {
    className: "max-w-sm",
    //imgAlt: `${movie.name} Cover`,
    //imgSrc: movie.image || "https://www.envirochoice.com.au/Images/ProductImages/product-image-1.png"
    //...(movie.image && { imgSrc: movie.image }),
  };

  return (
    <Card {...cardProps}
      renderImage={() => <img className="min-h-72" src={movie.image || "https://www.envirochoice.com.au/Images/ProductImages/product-image-1.png"} alt="image 1" />}>
      <div className="flex items-center justify-between">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.name}
        </h5>
        {movie.user?.name === user.name && <Button color="green"><BiEdit /></Button>}
      </div>
      {movie.description ?? (
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {movie.description}
        </p>
      )}
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {movie.director}
      </p>
    </Card>
  );
}
