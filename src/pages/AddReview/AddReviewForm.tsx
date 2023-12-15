import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Textarea, Heading, Button } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import StarRating from '../../components/StarRating';
import AddReviewImages from './AddReviewImages';
import ToastPopup from '../../components/Modal/ToastPopup';
import { addImage } from '../../utils/firebase';
import { submitReview } from '../../api/mypage';

function AddReviewForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [imageFile, setImageFile] = useState<File>();

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setReviewText(inputValue);
  };

  const [showAlert, setShowAlert] = useState({
    active: false,
    message: '',
  });

  const successFunction = () => {
    const toastData = {
      active: true,
      message: '등록되었습니다!',
    };
    setShowAlert(toastData);
  };

  const failFunction = (message: string) => {
    const toastData = {
      active: true,
      message,
    };
    setShowAlert(toastData);
  };

  // 리뷰 저장 (API 요청 보내기)
  const handleSubmit = async () => {
    const reservationId = Number(id);
    const reviewData = {
      reviewContent: reviewText,
      star: rating,
      images: [],
    };

    if (reviewText === '') {
      failFunction('리뷰 내용을 작성해주세요!');
    } else if (reviewText !== '' && imageFile) {
      const imageURL = (await addImage(imageFile)) as string;
      try {
        const response = await submitReview(reservationId, {
          ...reviewData,
          images: [imageURL],
        });

        if (response.code === 201) {
          successFunction();
          setTimeout(() => {
            navigate('/mypage');
          }, 700);
        } else {
          failFunction(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else if (reviewText !== '' && !imageFile) {
      try {
        const response = await submitReview(reservationId, reviewData);
        if (response.code === 201) {
          successFunction();
          setTimeout(() => {
            navigate('/mypage');
          }, 700);
        } else {
          failFunction(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <StyledContainer>
        <div>
          <Heading as="h1" size="lg" mb="1rem">
            별점
          </Heading>
          <StyledRatingContainer>
            <StarRating rating={rating} setRating={setRating} />
          </StyledRatingContainer>
        </div>
        <div>
          <Heading as="h1" size="lg" mb="1rem">
            리뷰 내용
          </Heading>
          <StyledTextArea
            isRequired
            value={reviewText}
            onChange={handleInputChange}
            placeholder="이 곳에서 머물렀던 기억을 자세하게 적어주세요 :)"
            title="리뷰 내용을 작성해주세요"
            size="md"
            variant="outline"
          />
        </div>
        <div>
          <Heading as="h1" size="lg" mb="1rem">
            숙소 사진
          </Heading>
          <AddReviewImages setImageFile={setImageFile} />
        </div>
        <Button variant="blue" size="sm" onClick={handleSubmit}>
          저장하기
        </Button>
      </StyledContainer>
      <ToastPopup status={showAlert} setFunc={setShowAlert} />
    </>
  );
}

export default AddReviewForm;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1rem;
`;

const StyledTextArea = styled(Textarea)`
  min-height: 150px;
  border-color: ${theme.colors.gray400};
`;

const StyledRatingContainer = styled.div``;
