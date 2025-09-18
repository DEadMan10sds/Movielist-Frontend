import { useRegisterMutation } from "../api/User";
import { useForm } from "react-hook-form";
import { CreateUser } from "../types/User";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useInlineAlert } from "../context/AlertContext";
import { AlertSlot } from "./AlertSlot";

export const RegisterForm = () => {
    const {
        handleSubmit,
        register: registerForm,
        formState: { errors },
    } = useForm<CreateUser>();
    const { setLoading } = useLoading();
    const [register, { isLoading }] = useRegisterMutation();
    const alerts = useInlineAlert();

    useEffect(() => setLoading(isLoading), [setLoading, isLoading]);

    const onSubmit = async (data: CreateUser) => {
        try {
            await register(data).unwrap();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alerts.show("register-error", {
                title: "Error",
                message: "Favor de revisar los datos de registro",
                color: "failure"
            })
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex max-w-lg flex-col gap-4 w-full"
        >
            <h1 className="light:text-black text-4xl font-bold dark:text-white">
                Registro
            </h1>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name">Nombre</Label>
                </div>
                <TextInput
                    id="name"
                    type="string"
                    placeholder="nombre"
                    {...registerForm("name")}
                    color={errors.name && "failure"}
                />
            </div>
            <Button type="submit">Registrarse</Button>
            <AlertSlot slotId="register-error" />
        </form>
    );
};
