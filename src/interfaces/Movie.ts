export interface MovieInterface {
  id: string;
  image: string | null;
  name: string;
  description?: string;
  director: string;
  user?: {
    name: string;
  };
}
