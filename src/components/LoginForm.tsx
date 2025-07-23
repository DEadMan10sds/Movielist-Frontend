import { Button, Label, TextInput } from "flowbite-react";

export const LoginForm = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">
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
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Contraseña</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <Button type="submit">Iniciar sesión</Button>
    </form>
  );
};
