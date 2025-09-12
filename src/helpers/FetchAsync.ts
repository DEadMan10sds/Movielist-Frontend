export async function FetchAsync<T>(
  url: string,
  //Define Type
  options?: any,
): Promise<T | undefined> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}${url}`, options);
  const parsedResponse = await res.json();

  if (!res.ok) throw new Error(parsedResponse.message);

  return parsedResponse;
}
