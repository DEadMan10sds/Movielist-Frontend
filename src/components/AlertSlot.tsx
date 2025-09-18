import { Alert } from "flowbite-react";
import { useInlineAlert } from "../context/AlertContext";

export const AlertSlot = ({ slotId }: { slotId: string }) => {
    const { get, hide } = useInlineAlert();
    const data = get(slotId);

    if (!data) return null;

    return (
        <Alert
            withBorderAccent
            color={data.color ?? "info"}
            onDismiss={() => hide(slotId)}
            additionalContent={data.message ? <p className="mt-2">{data.message}</p> : undefined}
        >
            {data.title ?? "Aviso"}
        </Alert>
    );
};
