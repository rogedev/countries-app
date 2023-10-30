export const Regions = {
  AFRICA: 'Africa',
  ASIA: 'Asia',
  AMERICA: 'Americas',
  EUROPE: 'Europe',
  ANTARTIC: 'Antarctic',
  OCEANIA: 'Oceania',
} as const;

export type Region = (typeof Regions)[keyof typeof Regions];
