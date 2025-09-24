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
    const form = new FormData();//Convert to form data to handle image

    Object.keys(data).forEach((item) => {
      if (item === "file") return;
      form.append(item, data[item])// TODO: Search good solution for TS error 7053
    })

    if (data.file?.length) form.append("file", data.file[0]); //Send just a single file

    try {
      await createMovie(form).unwrap();
      MoviesApi.util.invalidateTags(["Movies"]) //Revalidate Information
      if (closeDrawer) closeDrawer();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-rows-2 gap-5">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Nombre de la película</Label>
        </div>
        <TextInput
          id="name"
          placeholder="Spiderman"
          required
          color={errors.name && "failure"}
          {...register("name")}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="author">Director</Label>
        </div>
        <TextInput
          id="author"
          placeholder="Jame Gunn"
          required
          color={errors.author && "failure"}
          {...register("author")}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="image">Imagen</Label>
        </div>
        <TextInput
          id="image"
          type="file"
          color={errors.file && "failure"}
          {...register("file")}
        />
      </div>
      <Button type="submit" className="w-full">Crear</Button>
      <AlertSlot slotId="create-movie" />
    </form>
  );
};
