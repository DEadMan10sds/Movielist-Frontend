import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FetchAsync } from "../helpers/FetchAsync";

type LoginData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    console.log(data);

    try {
      const response = await FetchAsync(`/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      setShowAlert(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-lg flex-col gap-4"
      >
        <h1 className="light:text-black text-4xl font-bold dark:text-white">
          Bienvenidos
        </h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Correo</Label>
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@domain.com"
            required
            {...register("email")}
            color={errors.email && "failure"}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Contraseña</Label>
          </div>
          <TextInput
            {...register("password")}
            id="password1"
            type="password"
            required
            color={errors.password && "failure"}
          />
        </div>
        <Button type="submit">Iniciar sesión</Button>
      </form>

      {showAlert && <Alert color="failure">Error en las credenciales</Alert>}
    </>
  );
};
