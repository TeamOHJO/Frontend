import { useState } from 'react';
import { StorageError, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './firebase.config';

// 이미지 추가
export const addImage = (image: File) => {
  return new Promise<string | undefined>((resolve, reject) => {
    const filename = image.name + Date.now();
    const imageRef = ref(storage, `reviewImages/${filename}`);
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      'state_changed',
      null,
      (error: StorageError) => reject(error),
      async () => {
        try {
          const imageURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(imageURL);
        } catch (error) {
          reject(error);
        }
      },
    );
  });
};

export const handleImageUpload = async (
  imageFiles: File[],
  setImageURLs: (list: string[]) => void,
) => {
  try {
    // 업로드의 순서는 상관없으니 Promise.all로 이미지 업로드후 저장된 url 받아오기
    const urls = await Promise.all(
      imageFiles.map(async (file: File) => {
        const fileName = file.name + new Date();
        const storageRef = ref(storage, `images/${fileName}`);
        await uploadBytesResumable(storageRef, file);
        return getDownloadURL(storageRef);
      }),
    );
    // 업로드된 이미지 링크 상태로 지정 (보통은 해당 링크를 데이터베이스(파이어스토어)에 저장)
    setImageURLs(urls);
    alert('성공적으로 업로드 되었습니다');
  } catch (err) {
    console.log(err);
  }
};
