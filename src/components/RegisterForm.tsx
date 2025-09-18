import { useRegisterMutation } from "../api/Auth";
import { useForm } from "react-hook-form";
import { CreateUser } from "../types/User";
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useInlineAlert } from "../context/AlertContext";
import { AlertSlot } from "./AlertSlot";

export const RegisterForm = ({ showLoginTab }: { showLoginTab?: () => void }) => {
    const {
        reset,
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
            reset();
            showLoginTab?.();
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
            <p className="dark:text-white">Ya tienes cuenta? <span className="underline font-semibold hover:text-blue-300 cursor-pointer" onClick={() => showLoginTab?.()}>Inicia sesión</span></p>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name">Nombre</Label>
                </div>
                <TextInput
                    id="name"
                    type="string"
                    required
                    placeholder="Adan Alejandro"
                    {...registerForm("name")}
                    color={errors.name && "failure"}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name">Apellidos</Label>
                </div>
                <TextInput
                    id="surname"
                    type="string"
                    required
                    placeholder="Sanchez"
                    {...registerForm("surname")}
                    color={errors.surname && "failure"}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email">Correo</Label>
                </div>
                <TextInput
                    id="email"
                    type="email"
                    required
                    placeholder="adan.sanchez@proton.me"
                    {...registerForm("email")}
                    color={errors.email && "failure"}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password">Contraseña</Label>
                </div>
                <TextInput
                    id="password"
                    type="password"
                    required
                    {...registerForm("password")}
                    color={errors.password && "failure"}
                />

            </div>
            <Button type="submit">Registrarse</Button>
            <AlertSlot slotId="register-error" />
        </form>
    );
};
