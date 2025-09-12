export type ActionResult<T = unknown> =
  | { ok: true; data?: T; redirectTo?: string }
  | { ok?: false, error: string };

export type Theme = 'light' | 'dark';

export interface Author {
  id: string;
  name: string | null;
  email: string;
  emailVerified: string | null;
  image: string | null;
  password: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  authorId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  author: Author;
}
