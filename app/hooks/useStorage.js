import { useState, useEffect } from 'react';
import { db, storage } from '../config/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
const useStorage = () => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const uploadSongFile = async (fileUri) => {
    const storageRef = ref(storage, `songs/${fileUri.name}`);
    await uploadBytes(storageRef, fileUri);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };
  return {
    uploadSongFile,
  };
};

export default useStorage;
