import { client, clientToken } from '.';

export const getAccommodationDetail = async (
  accommodationId: string | undefined,
  maxCapacity: number,
  startDate: string,
  endDate: string,
) => {
  try {
    const response = await client.get(
      `https://yanoljaschool.site:8080/accommodation/detail/${accommodationId}?maxCapacity=${maxCapacity}&startDate=${startDate}&endDate=${endDate}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAccommodationDetailToken = async (
  accommodationId: string | undefined,
  maxCapacity: number,
  startDate: string,
  endDate: string,
) => {
  try {
    const response = await clientToken.get(
      `https://yanoljaschool.site:8080/accommodation/detail/${accommodationId}?maxCapacity=${maxCapacity}&startDate=${startDate}&endDate=${endDate}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getReviews = async (accommodationId: string | undefined) => {
  try {
    const response = await client.get(
      `https://yanoljaschool.site:8080/review/accommodation/${accommodationId}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createBasket = async (
  roomId: string | undefined,
  basketData: { startDate: string; endDate: string; numberOfPerson: number },
) => {
  try {
    const response = await clientToken.post(
      `https://yanoljaschool.site:8080/basket/rooms/${roomId}`,
      JSON.stringify(basketData),
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createHeart = async (accommodationId: string | undefined) => {
  try {
    const response = await clientToken.post(
      `https://yanoljaschool.site:8080/accommodation/${accommodationId}/likes`,
    );
    return response.data.data.liked;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
