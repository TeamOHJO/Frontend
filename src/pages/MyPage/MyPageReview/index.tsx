import { useState, useEffect } from 'react';
import { Skeleton } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';
import MyPageSubtitle from '../MyPageSubtitle';
import { getCookie } from '../../../utils/utils';
import ReviewCard from './ReviewCard';

interface ReviewState {
  star: number;
  reviewImages: string[];
  accommodationCategory: string;
  accommodationName: string;
  roomName: string;
  startDate: string;
  endDate: string;
  reviewContent: string;
}

interface MyReviewsState {
  code: number;
  message: string;
  data: ReviewState[];
}

function MyPageReview() {
  const [myReviews, setMyReviews] = useState<MyReviewsState>();
  const accessToken = getCookie('token');

  const fetchData = async () => {
    try {
      const response = await fetch('https://yanoljaschool.site:8080/review/user/list', {
        method: 'GET',
        headers: {
          'content-type': import.meta.env.VITE_CONTENT_TYPE,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setMyReviews(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const skel = [1, 2, 3, 4, 5];

  return (
    <div>
      <MyPageSubtitle subtitle="내 리뷰" />
      {}
      {myReviews
        ? myReviews.data.map((review: ReviewState) => <ReviewCard review={review} key={uuid()} />)
        : skel.map(() => <Skeleton height="220px" style={{ margin: '10px' }} />)}
    </div>
  );
}

export default MyPageReview;
