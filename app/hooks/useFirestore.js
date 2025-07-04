import { firestore } from '../config/firebaseConfig';
// import { getDocs, collection, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import useStorage from './useStorage';
import { doc, setDoc, collection, getDocs } from 'firebase/firestore';
const useFirestore = () => {
  const { uploadSongFile } = useStorage();
  const [loading, setLoading] = useState(false);
  const setNewSong = async (songData) => {
    console.log('Add New Song');
    console.log(songData);
    const songFileUrl = await uploadSongFile(songData);

    const songRef = doc(firestore, 'songs', songData.title);
    await setDoc(songRef, { ...songData, uri: songFileUrl });
  };

  const getAllSongs = async () => {
    console.log('Get All Songs');
    const songsRef = collection(firestore, 'songs');
    const songsSnapshot = await getDocs(songsRef);
    
    return songsSnapshot.docs.map((doc) => doc.data());
  };

  return {
    setNewSong,
    getAllSongs,
  };
};

export default useFirestore;
