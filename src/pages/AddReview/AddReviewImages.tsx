import styled from '@emotion/styled';
import { CloseCircleFilled, PlusOutlined } from '@ant-design/icons';
import { ChangeEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { theme } from '../../styles/theme';

function AddReviewImages({
  imageFiles,
  setImageFiles,
}: {
  imageFiles: File[];
  setImageFiles: (files: File[]) => void;
}) {
  const [showImages, setShowImages] = useState<string[]>([]);

  // 이미지 미리보기용 상대경로 & 이미지 (파일 형태) 저장
  const handleChangeImages = (event: ChangeEvent<HTMLInputElement>) => {
    const imageLists = Array.from(event.target.files as FileList);
    let imageUrlLists: string[] = [...showImages];
    const imageFileLists = [...imageFiles];

    for (let i = 0; i < imageLists.length; i += 1) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
      imageFileLists.push(imageLists[i]);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    setImageFiles(imageFileLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id: number) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <>
      <StyledLabel htmlFor="input-file">
        <StyledInput type="file" id="input-file" multiple onChange={handleChangeImages} />
        <PlusOutlined />
        <span>사진추가</span>
      </StyledLabel>
      <StyledImageWrapper>
        {showImages.map((image, id) => (
          <StyledImageWrap key={uuid()}>
            <img src={image} alt={`${image}-${id}`} />
            <StyledDeleteIcon onClick={() => handleDeleteImage(id)} />
          </StyledImageWrap>
        ))}
      </StyledImageWrapper>
    </>
  );
}

export default AddReviewImages;

const StyledLabel = styled.label`
  width: fit-content;
  display: block;
  border: 1px solid ${theme.colors.gray400};
  border-radius: 10rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background-color: ${theme.colors.gray100};
  }

  span:last-child {
    margin-left: 0.5rem;
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledImageWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

const StyledImageWrap = styled.div`
  position: relative;
`;

const StyledDeleteIcon = styled(CloseCircleFilled)`
  z-index: 5;
  position: absolute;
  top: 5px;
  right: 3px;
  font-size: 1rem;
  color: ${theme.colors.gray600};
`;
