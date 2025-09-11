export type ActionResult<T = unknown> =
  | { ok: true; data?: T; redirectTo?: string }
  | { ok?: false; error: string };

export type Theme = 'light' | 'dark';

export interface Author {
  id: string;
  name: string;
  email: string;
  emailVerified: string | null;
  image: string;
  password: string | null;
  createdAt: string; // або Date, якщо парсиш
  updatedAt: string; // або Date
}

export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  createdAt: string; // або Date
  updatedAt: string; // або Date
  author: Author;
}
