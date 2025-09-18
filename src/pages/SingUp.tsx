import { TabItem, Tabs } from "flowbite-react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { FormWrapper } from "../components/FormWrapper";

export const Login = () => {
  return (
    <div className="m-auto mt-[7%] flex flex-col items-center justify-center">
      <FormWrapper>
        <Tabs className="w-lg">
          <TabItem active title="Iniciar sesión">
            <LoginForm />
          </TabItem>
          <TabItem title="Registro">
            <RegisterForm />
          </TabItem>
        </Tabs>
      </FormWrapper>
    </div>
  );
};
