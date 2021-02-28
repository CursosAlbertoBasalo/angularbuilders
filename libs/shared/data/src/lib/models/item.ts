export interface Item {
  name: string;
  description?: string;
  url?: string;
  id: string;
  categoryId: string;
  ownerId?: string;

  price?: number;
  event?: {
    date: Date;
    location: string;
  };
  course?: {
    date: Date;
    teacher: string;
    academy: string;
  };
}
