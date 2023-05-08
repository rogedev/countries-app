export const Regions = {
  AFRICA: 'Africa',
  ASIA: 'Asia',
  AMERICA: 'Americas',
  EUROPE: 'Europe',
} as const;

export type Region = (typeof Regions)[keyof typeof Regions];
