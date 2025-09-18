import { TabItem, Tabs, TabsRef } from "flowbite-react";
import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import { FormWrapper } from "../components/FormWrapper";
import { useRef, useState } from "react";

export const Login = () => {

  const tabsReference = useRef<TabsRef>(null);
  const [, setActiveTab] = useState(0);

  return (
    <div className="m-auto mt-[7%] flex flex-col items-center justify-center">
      <FormWrapper>
        <Tabs className="w-lg" ref={tabsReference} onActiveTabChange={(tab) => setActiveTab(tab)}>
          <TabItem active title="Iniciar sesión">
            <LoginForm showRegisterTab={() => tabsReference.current?.setActiveTab(1)} />
          </TabItem>
          <TabItem title="Registro">
            <RegisterForm showLoginTab={() => tabsReference.current?.setActiveTab(0)} />
          </TabItem>
        </Tabs>
      </FormWrapper>
    </div>
  );
};
