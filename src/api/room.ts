import { client } from '.';

export const getRoomDetail = async (roomId: string | undefined) => {
  try {
    const response = await client.get(
      `https://yanoljaschool.site:8080/accommodation/detail/room/${roomId}`,
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
