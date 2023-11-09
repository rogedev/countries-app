import { Border } from '../types/Border';
import { Country } from '../types/Country';

export function mapCountryToBorder(country: Country): Border {
  return {
    name: country.name,
    code: country.code,
  };
}
