import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import useFirestore from '../hooks/useFirestore';
import { useNavigation } from '@react-navigation/native';

const PlayList = () => {
  const { getAllSongs } = useFirestore();
  const [playlist, setPlaylist] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getAllSongs();
      setPlaylist(songs);
    };

    fetchSongs();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.screenTitle, styles.playlistScreenTitle]}>
        Playlists
      </Text>
      {playlist.map((song) => (
        <TouchableOpacity
          key={song.id}
          style={styles.playlistItem}
          onPress={() => navigation.navigate('Player', { songFirebase: song })}
        >
          <Image
            source={require('../../assets/music-icon.png')}
            style={styles.playlistImage}
          />
          <View style={styles.playlistTextContainer}>
            <Text style={styles.playlistTitle}>{song.title}</Text>
            <Text style={styles.playlistSubtitle}>{song.artist}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddNewSong')}
      >
        <Text style={styles.addButtonLabel}>Create Playlist</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue', // Set your desired background color here for the entire playlist screen
    padding: 20,
  },
  screenTitle: {
    fontSize: 40,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  playlistScreenTitle: {
    color: 'blue',
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  playlistImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 30,
  },
  playlistTextContainer: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  playlistSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  addButtonLabel: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default PlayList;
