import { Outlet } from "react-router-dom";
import { NavbarCustom } from "../components/NavbarCustom";
import { FormWrapper } from "../components/FormWrapper";

export const Layout = () => {
  return (
    <>
      <NavbarCustom />
      <FormWrapper>
        <div className="p-5">
          <Outlet />
        </div>
      </FormWrapper>
    </>
  );
};
