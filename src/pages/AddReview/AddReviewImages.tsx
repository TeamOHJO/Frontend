import styled from '@emotion/styled';
import { CloseCircleFilled, PlusOutlined } from '@ant-design/icons';
import { ChangeEvent, useState } from 'react';
import { theme } from '../../styles/theme';

interface AddReviewImagesProps {
  setImageFile: (file: File) => void;
}

function AddReviewImages({ setImageFile }: AddReviewImagesProps) {
  const [previewImageURL, setPreviewImageURL] = useState<string>('');

  // 이미지 미리보기용 상대경로 & 이미지 (파일 형태) 저장
  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFileList = event.target.files as FileList;
    const imageFile = imageFileList[0];

    setPreviewImageURL(URL.createObjectURL(imageFile));
    setImageFile(imageFile);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = () => {
    setPreviewImageURL('');
  };

  return (
    <>
      <StyledLabel htmlFor="input-file">
        <StyledInput type="file" id="input-file" onChange={handleChangeImage} />
        <PlusOutlined />
        <span>사진추가</span>
      </StyledLabel>
      {previewImageURL && (
        <StyledImageWrap>
          <StyledImage src={previewImageURL} alt="reviewImage" />
          <StyledDeleteIcon onClick={handleDeleteImage} />
        </StyledImageWrap>
      )}
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

const StyledImageWrap = styled.div`
  margin-top: 1rem;
  position: relative;
  width: 200px;
  height: 200px;
`;

const StyledImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledDeleteIcon = styled(CloseCircleFilled)`
  z-index: 5;
  position: absolute;
  top: 5px;
  right: 3px;
  font-size: 1rem;
  color: ${theme.colors.gray600};
`;
