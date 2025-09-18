export type AlertColor = "info" | "success" | "warning" | "failure";

export type AlertData = {
  title?: string;
  message?: string;
  color?: AlertColor;
};

export type AlertsState = Record<string, AlertData | null>;

export type AlertsContextType = {
  show: (slotId: string, data: AlertData) => void;
  hide: (slotId: string) => void;
  get: (slotId: string) => AlertData | null;
};
