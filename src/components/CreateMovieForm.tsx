import { Button, Label, TextInput } from "flowbite-react";
import type { CreateMovie } from "../types/Movies";
import { useForm } from "react-hook-form";
import { AlertSlot } from "./AlertSlot";
import { useInlineAlert } from "../context/AlertContext";
import { MoviesApi, useCreateMovieMutation } from "../api/Movies";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";

export const CreateMovieForm = ({ closeDrawer }: { closeDrawer?: () => void }) => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm<CreateMovie>();
  const { setLoading } = useLoading();
  const alert = useInlineAlert();
  const [createMovie, { isLoading }] = useCreateMovieMutation();


  useEffect(() => setLoading(isLoading), [setLoading, isLoading]);


  const onSubmit = async (data: CreateMovie) => {
    try {
      await createMovie(data).unwrap();
      //Revalidar información
      MoviesApi.util.invalidateTags(["Movies"])
      if (closeDrawer) closeDrawer();
    } catch (error) {
      console.log(error)
      alert.show("create-movie", {
        color: "failure",
        title: "Error",
        message: "Favor de verificar los datos de la película"
      })
    }
    finally {
      reset();
    }

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput
          id="name"
          placeholder="Spiderman"
          required
          {...register("name")}
        />
      </div>
      <Button type="submit" className="w-full">Crear</Button>
      <AlertSlot slotId="create-movie" />
    </form>
  );
};
