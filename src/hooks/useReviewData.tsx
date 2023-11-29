import { useEffect, useState } from 'react';
import { getReview } from '../api';

export function useReviewData(accommodationId: string) {
  const [reviewData, setReviewData] = useState<any>(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await getReview(accommodationId);
        setReviewData(response.data);
      } catch (error) {
        console.error('Error fetching review data:', error);
      }
    };

    fetchReviewData();
  }, [accommodationId]);

  return reviewData;
}
