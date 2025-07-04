import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import useStorage from '../hooks/useStorage';
import useFirestore from '../hooks/useFirestore';

const AddNewSong = () => {
  const [songName, setSongName] = useState('');
  const [songFile, setSongFile] = useState(null);

  const { uploadSongFile } = useStorage();
  const { setNewSong } = useFirestore();

  const handleSongName = (text) => {
    setSongName(text);
  };

  const handleSongFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        //accept all types
        type: 'audio/*',
      });
      if (true) {
        setSongFile(result);
      }
    } catch (error) {
      console.error('Error picking a document: ', error);
    }
  };

  const handleSubmit = async () => {
    if (!songFile) {
      console.log('No file selected');
      return;
    }
    const songFileUri = songFile.assets[0].uri;

    const songData = {
      title: songName,
      uri: songFileUri,
    };

    setNewSong(songData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Add New Song</Text>
      <TextInput
        style={styles.input}
        placeholder='Song Name'
        onChangeText={handleSongName}
      />
      <Button title='Choose Song File' onPress={handleSongFile} />
      <Button title='Submit' onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginBottom: 20,
  },
});

export default AddNewSong;
