import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import MyPageSubtitle from '../MyPageSubtitle';
import { getCookie } from '../../../utils/utils';
import ReviewCard from './ReviewCard';
import MyReviewToastPopup from './MyReviewToastPopup';

interface ReviewState {
  star: number;
  reviewImages: string[];
  accommodationCategory: string;
  accommodationName: string;
  roomName: string;
  startDate: string;
  endDate: string;
  reviewContent: string;
  reviewId: number;
}

interface MyReviewsState {
  code: number;
  message: string;
  data: ReviewState[];
}

function MyPageReview() {
  const [myReviews, setMyReviews] = useState<MyReviewsState>();
  const accessToken = getCookie('token');
  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const openFunction = () => {
    const toastData = {
      active: true,
      message: '리뷰가 성공적으로 삭제되었습니다.',
    };
    setShowAlert(toastData);
  };

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

  return (
    <div>
      <MyPageSubtitle subtitle="내 리뷰" />
      {myReviews &&
        myReviews.data.map((review: ReviewState) => (
          <ReviewCard
            review={review}
            fetchData={fetchData}
            key={uuid()}
            openFunction={openFunction}
          />
        ))}
      <MyReviewToastPopup status={showAlert} setFunc={setShowAlert} />
    </div>
  );
}

export default MyPageReview;
