export const Regions = Object.freeze({
  AFRICA: 'Africa',
  ASIA: 'Asia',
  AMERICA: 'Americas',
  EUROPE: 'Europe',
  ANTARCTIC: 'Antarctic',
  OCEANIA: 'Oceania',
});

export type Region = (typeof Regions)[keyof typeof Regions];
