import { MovieCard } from "../components/MovieCard";
import { MovieInterface } from "../interfaces/Movie";
import { Button, Drawer, DrawerHeader, DrawerItems, Dropdown, DropdownItem, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { CreateMovieForm } from "../components/CreateMovieForm";
import { useGetMoviesQuery } from "../api/Movies";
import { BiFilter, BiSearch } from "react-icons/bi";

const SearchByItem = [{ value: "name", text: "Nombre" }, { value: "director", text: "Director" }]

export default function Home() {
  const { data } = useGetMoviesQuery();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const [searchBy, setSearchBy] = useState<number>(0)
  const [showedMovies, setShowedMovies] = useState<MovieInterface[] | undefined>(data)
  const [searchedMovie, setSearchedMovie] = useState<string | null>(null);

  const handleClose = () => setDrawerIsOpen(false);
  const handleOpen = () => setDrawerIsOpen(true);


  useEffect(() => {
    if (!searchedMovie || searchedMovie === "")
      setShowedMovies(data)
    else
      setShowedMovies(...[data?.filter(movie => movie[SearchByItem[searchBy].value].toLowerCase().includes(searchedMovie.toLowerCase()))])

  }, [searchedMovie, setSearchedMovie, data, searchBy])

  return (
    <>
      <Drawer open={drawerIsOpen} onClose={handleClose}>
        <DrawerHeader title="Crear nueva película" />
        <DrawerItems>
          <CreateMovieForm closeDrawer={handleClose} />
        </DrawerItems>
      </Drawer>
      <div className="flex w-full justify-end gap-4 mb-5">
        <Dropdown label="" renderTrigger={() => <div className="flex gap-2 items-center text-white cursor-pointer bg-blue-600 rounded-md px-3"><BiFilter />{SearchByItem[searchBy].text}</div>} >
          {SearchByItem.map((item, index) =>
            <DropdownItem key={`search-by-${item.value}`} onClick={() => setSearchBy(index)}>{item.text}</DropdownItem>
          )}
        </Dropdown>
        <TextInput id="search-movie" icon={BiSearch} placeholder="Buscar película..." onChange={(event) => setSearchedMovie(event.target.value)} />
        <Button color="green" onClick={handleOpen}>
          Registrar Película
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-6">
        {showedMovies ? showedMovies.map((movie: MovieInterface) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
          : <p> No hay películas regitradas </p>
        }
      </div>
    </>
  );
}
