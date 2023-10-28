export const RoutePaths = {
  BASE: '/',
} as const;

export type RoutePath = (typeof RoutePaths)[keyof typeof RoutePaths];
