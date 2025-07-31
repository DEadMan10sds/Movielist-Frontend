import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { MovieInterface } from "../interfaces/Movie";

export default function Home() {
  const data = useLoaderData<MovieInterface[]>();
  console.log(data);
  return (
    <div className="flex gap-6 p-5">
      {data.map((movie: MovieInterface) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}
