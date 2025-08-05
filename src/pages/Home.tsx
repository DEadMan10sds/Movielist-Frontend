import { useLoaderData } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";
import { MovieInterface } from "../interfaces/Movie";
import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import { useState } from "react";
import { CreateMovieForm } from "../components/CreateMovieForm";

export default function Home() {
  const data = useLoaderData<MovieInterface[]>();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleClose = () => setDrawerIsOpen(false);
  const handleOpen = () => setDrawerIsOpen(true);

  return (
    <div className="p-5">
      <Drawer open={drawerIsOpen} onClose={handleClose}>
        <DrawerHeader title="Crear nueva película" />
        <DrawerItems>
          <CreateMovieForm />
        </DrawerItems>
      </Drawer>
      <div className="flex w-full justify-end">
        <Button color="green" onClick={handleOpen}>
          Crear
        </Button>
      </div>
      <div className="flex gap-6">
        {data.map((movie: MovieInterface) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}
