export function formatPopulation(population: number): string {
  const options = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return population.toLocaleString('en-US', options);
}
