export function parseIfJson(value: any): any {
  if (typeof value !== "string") return value;

  try {
    const parsed = JSON.parse(value);

    // Evita parsear cosas como `"true"` o `"123"` que también son JSON válidos
    if (
      (typeof parsed === "object" && parsed !== null) ||
      Array.isArray(parsed)
    ) {
      return parsed;
    }

    return value;
  } catch {
    return value;
  }
}
