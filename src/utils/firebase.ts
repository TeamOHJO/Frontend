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
