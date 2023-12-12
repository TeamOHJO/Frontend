import axios from 'axios';
import { clientToken } from '.';

axios.defaults.withCredentials = true;

interface SearchFilterProps {
  category: string;
  isDomestic: boolean;
  startDate: string;
  endDate: string;
  numberOfPeople: number;
}

export const getAccommodationList = async (
  page: number,
  { category, isDomestic, startDate, endDate, numberOfPeople }: SearchFilterProps,
) => {
  const res = await clientToken.get(
    `/accommodation?category=${category}&isDomestic=${isDomestic}&page=${page}&startDate=${startDate}&endDate=${endDate}&numberOfPeople=${numberOfPeople}`,
  );
  return res.data;
};
