import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../api/Auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";
import type { LoginData } from "../types/Login";


export const LoginForm = ({ showRegisterTab }: { showRegisterTab?: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<LoginData>();
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const { setLoading } = useLoading()
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => setLoading(isLoading), [setLoading, isLoading])

  const onSubmit = async (data: LoginData) => {
    try {
      await login(data).unwrap();
      navigate("/")
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setShowAlert(true);
      resetField("password")
    }
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-lg flex-col gap-4"
    >
      <h1 className="light:text-black text-4xl font-bold dark:text-white">
        Bienvenido
      </h1>
      <p className="dark:text-white">No tienes cuenta? <span className="underline font-semibold hover:text-blue-300 cursor-pointer" onClick={() => showRegisterTab?.()}>Regístrate</span></p>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Correo</Label>
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@domain.com"
          required
          {...register("email")}
          color={errors.email && "failure"}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Contraseña</Label>
        </div>
        <TextInput
          {...register("password")}
          id="password"
          type="password"
          required
          color={errors.password && "failure"}
        />
      </div>
      <Button type="submit">Iniciar sesión</Button>
      {showAlert && <Alert withBorderAccent color="failure" onDismiss={() => setShowAlert(false)} additionalContent={<p className="mt-2">Las credenciales no son válidas</p>}>Error</Alert>}
    </form>
  );
};
