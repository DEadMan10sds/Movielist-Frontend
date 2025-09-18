import { Spinner } from "flowbite-react";
import { useState, ReactNode, useMemo } from "react";
import { LoadingContext } from "../context/LoadingContext";
import type { AlertsContextType, AlertsState } from "../types/Alert";
import { AlertContext } from "../context/AlertContext";


export const FormWrapper = ({ children }: {
    children: ReactNode
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [alerts, setAlerts] = useState<AlertsState>({});

    const alertsApi = useMemo<AlertsContextType>(
        () => ({
            show: (slotId, data) => setAlerts(s => ({ ...s, [slotId]: data })),
            hide: (slotId) => setAlerts(s => ({ ...s, [slotId]: null })),
            get: slotId => alerts[slotId] ?? null
        }),
        [alerts]
    )



    const value = useMemo(() => ({ setLoading }), [setLoading]);




    return <LoadingContext.Provider value={value}>
        <AlertContext.Provider value={alertsApi}>
            {children}

            {loading && (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/30">
                    <Spinner />
                </div>
            )}
        </AlertContext.Provider>
    </LoadingContext.Provider>
}