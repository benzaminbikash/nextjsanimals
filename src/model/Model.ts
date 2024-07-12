export interface WIDTH {
  width: number;
}

export interface TITLE {
  name: string;
  categorylink: string;
}

export interface Animal {
  _id: string;
  _v: number;
  updatedAt: Date;
  price: number | null;
  postBy: string;
  phone: number;
  name: string;
  image: string;
  delay?: number;
  gender: string;
  createdAt: Date;
  category: string;
}
