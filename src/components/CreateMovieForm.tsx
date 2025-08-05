import { Label, TextInput } from "flowbite-react";

export const CreateMovieForm = () => {
  return (
    <>
      <form>
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
      </form>
    </>
  );
};
