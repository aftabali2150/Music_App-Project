import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AudioList = () => {
  const [playlist, setPlaylist] = useState([
    { id: '1', title: 'Song 1', uri: 'song1.mp3' },
    { id: '2', title: 'Song 2', uri: 'song2.mp3' },
    { id: '3', title: 'Song 3', uri: 'song3.mp3' },
    { id: '4', title: 'Song 4', uri: 'song3.mp3' },
    { id: '5', title: 'Song 5', uri: 'song3.mp3' },
    { id: '6', title: 'Song 6', uri: 'song3.mp3' },
    { id: '7', title: 'Song 7', uri: 'song3.mp3' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={[styles.screenTitle, styles.audioListScreenTitle]}>
        AudioList
      </Text>
      {playlist.map((song) => (
        <TouchableOpacity key={song.id} style={styles.songItem}>
          <Image
            source={require('../../assets/music-icon.png')}
            style={styles.songImage}
          />
          <View style={styles.songInfo}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.artistName}>Artist Name</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue', // Set your desired background color here
  },
  screenTitle: {
    fontSize: 40,
    marginBottom: 20,
    color: 'green',
    textAlign: 'center',
  },
  audioListScreenTitle: {
    fontWeight: 'bold',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start (left side)
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  songImage: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 25,
  },
  songInfo: {
    flexDirection: 'column',
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  artistName: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AudioList;
