import { Button, Tooltip } from "flowbite-react";
import { useDispatch } from "react-redux";
import { unsetUser } from "../reducers/User";
import { BiSolidExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const LogOutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return <Tooltip content="Cerrar Sesión">
        <Button outline
            onClick={() => {
                dispatch(unsetUser())
                navigate("/");
            }}
        >
            <BiSolidExit />
        </Button>
    </Tooltip>
}