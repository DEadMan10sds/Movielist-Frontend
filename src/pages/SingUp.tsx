import { TabItem, Tabs } from "flowbite-react";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <div className="m-auto mt-45 flex flex-col items-center justify-center">
      <Tabs>
        <TabItem active title="Iniciar sesión">
          <LoginForm />
        </TabItem>
        <TabItem title="Registro">Registro</TabItem>
      </Tabs>
    </div>
  );
};
