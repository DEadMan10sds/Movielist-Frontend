export async function FetchAsync<T>(url: string): Promise<T | undefined> {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`);
    const parsedResponse = await res.json();

    if (!res.ok) {
      console.log(parsedResponse.message);
      throw new Error(parsedResponse.message);
    }

    return parsedResponse;
  } catch (error) {
    console.error("----------------------------------");
    console.error(error);
    console.error("----------------------------------");
  }
}
