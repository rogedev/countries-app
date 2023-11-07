export const Regions = {
  AFRICA: 'Africa',
  ASIA: 'Asia',
  AMERICA: 'Americas',
  EUROPE: 'Europe',
  ANTARCTIC: 'Antarctic',
  OCEANIA: 'Oceania',
} as const;

export type Region = (typeof Regions)[keyof typeof Regions];
