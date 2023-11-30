import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import PrevArrow from './PrevArrow';
// import NextArrow from './NextArrow';
import { Review } from '../../@types/interface';

const ReviewCardImage = ({ reviewData }: { reviewData: Review }) => {
  if (!reviewData || !reviewData.images || reviewData.images.length === 0) {
    return null;
  }

  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const mainSliderRef = useRef<Slider>(null);
  // const prevSliderRef = useRef<Slider>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    // afterChange: (current: number) => {
    //   setCurrentSlide(current);
    //   if (prevSliderRef.current) {
    //     prevSliderRef.current.slickGoTo(current);
    //   }
    // },
    // prevArrow: <PrevArrow onClick={() => {}} />,
    // nextArrow: <NextArrow onClick={() => {}} />,
  };

  // const prevSliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '18px',
  //   focusOnSelect: true,
  //   afterChange: (current: number) => {
  //     setCurrentSlide(current);
  //     if (mainSliderRef.current) {
  //       mainSliderRef.current.slickGoTo(current);
  //     }
  //   },
  // };

  const { images } = reviewData;
  // console.log(images);

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  // const updateIsCenter = (index: number) => index === currentSlide;

  useEffect(() => {
    const loadImage = (url: string) => {
      return new Promise<void>(resolve => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = url;
      });
    };
    const loadImages = async () => {
      const promises = images.map(url => loadImage(url));
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, [images]);

  return (
    <div key={reviewData.reviewId}>
      <Box display="flex" flexDir="column" justifyContent="center" alignContent="center">
        {/* {reviewData.images && reviewData.images.length > 0 && ( */}
        {imagesLoaded && images.length > 0 && (
          <>
            <StyledSlider {...mainSliderSettings} ref={mainSliderRef}>
              {reviewData.images.map((imageUrl, index) => (
                <StyledImgContainer key={imageUrl}>
                  <StyledThumImages
                    src={imageUrl}
                    alt={`${index + 1}`}
                    onClick={handleImageClick}
                  />
                </StyledImgContainer>
              ))}
            </StyledSlider>
            {/* <StyledSlider {...prevSliderSettings} ref={prevSliderRef}>
              {reviewData.images.map((imageUrl, index) => {
                const altText = `${index + 1}`;
                const isCenter = updateIsCenter(index);

                return (
                  <StyledImgContainer key={imageUrl}>
                    <StyledListImage
                      src={imageUrl}
                      alt={altText}
                      className={isCenter ? 'selected' : ''}
                      isCenter={isCenter}
                    />
                  </StyledImgContainer>
                );
              })}
            </StyledSlider> */}
            {isFullscreen && (
              <FullscreenOverlay onClick={handleCloseFullscreen}>
                <FullscreenImage
                  src={reviewData.images[0]}
                  // src={reviewData.images[currentSlide]}
                  // alt={`Fullscreen ${currentSlide + 1}`}
                />
              </FullscreenOverlay>
            )}
          </>
        )}
      </Box>
    </div>
  );
};

export default ReviewCardImage;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4px;
  border: none;
`;

const StyledThumImages = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  margin-top: 2rem;
  object-fit: cover;

  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    opacity: 0.9;
  }
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
`;

// const StyledListImage = styled.img<{ isCenter: boolean }>`
//   display: flex;
//   width: ${({ isCenter }) => (isCenter ? '110px' : '100px')};
//   height: ${({ isCenter }) => (isCenter ? '75px' : '75px')};
//   object-fit: cover;
//   border-radius: 4px;
//   margin: 0 auto;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     transform: ${({ isCenter }) => (isCenter ? 'none' : 'translateY(8px)')};
//   }
//   transition: all 0.5s;
// `;

// 이미지 클릭 시 전체화면 띄워주기
const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

// const images = [
//   'https://i.pinimg.com/564x/04/23/d3/0423d390ac97c0051525c4d8d8aa1468.jpg',
//   'https://i.pinimg.com/564x/19/74/27/197427ae81179978da67055c4ce6ac2d.jpg',
//   'https://i.pinimg.com/564x/0c/7f/7b/0c7f7b30a7774b8a8f2b3059462313cd.jpg',
//   'https://i.pinimg.com/564x/48/39/88/483988e0541139d9b774dd70feb038ee.jpg',
//   'https://i.pinimg.com/564x/96/57/12/9657121154f3837e05c04c3b86a45668.jpg',
//   'https://i.pinimg.com/564x/73/48/11/734811bd95bec06aae5d936eb23f033c.jpg',
// ];
