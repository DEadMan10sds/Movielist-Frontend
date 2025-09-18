import { Button } from "flowbite-react";
import { useDispatch } from "react-redux";
import { unsetUser } from "../reducers/User";
import { BiSolidExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const LogOutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return <Button className="flex gap-3 items-center justify-between" outline
        onClick={() => {
            dispatch(unsetUser())
            navigate("/");
        }}
    >
        <span>Cerrar sesión</span>
        <BiSolidExit />
    </Button>
}