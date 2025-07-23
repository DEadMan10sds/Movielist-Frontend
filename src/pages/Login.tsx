import { Button, Label, TextInput } from "flowbite-react";

export const Login = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <div>
        <form className="flex max-w-md flex-col gap-4">
          <h1 className="text-4xl font-bold">Bienvenidos</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
