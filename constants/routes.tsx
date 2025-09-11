export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  POSTS: '/posts',
  POST: (id: string) => `/posts/${id}`,
  CREATE_POST: '/posts/create',
  USER_INFO: '/user-info',
  SIGN_IN: '/auth/signin',
  SIGN_UP: '/auth/signup',
} as const;

export const ROUTES_NAMES = {
  HOME: 'Home',
  ABOUT: 'About',
  POSTS: 'Posts',
  POST: 'Post',
  CREATE_POST: 'Create Post',
  USER_INFO: 'User Info',
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Sign Up',
} as const;
