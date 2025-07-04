import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

const Player = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const song = {
    title: 'aftabali',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  };

  useEffect(() => {
    
    loadAudio();

    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  const loadAudio = async () => {
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: song.uri },
        { shouldPlay: isPlaying }
      );
      setSound(newSound);

      newSound.setOnPlaybackStatusUpdate(updateStatus);
    } catch (error) {
      console.error('Error in loadAudio:', error);
    }
  };

  const updateStatus = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    }
  };

  const playPauseToggle = async () => {
    try {
      if (!sound) return;

      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }

      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error in playPauseToggle:', error);
    }
  };

  const onSeekSliderValueChange = (value) => {
    if (sound) {
      sound.setPositionAsync(Math.floor(value * duration));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.songTitle}>{song.title}</Text>
      <Slider
        style={styles.slider}
        value={position / duration}
        onValueChange={onSeekSliderValueChange}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor='#1DB954'
        thumbTintColor='#1DB954'
      />
      <TouchableOpacity
        style={styles.playPauseButton}
        onPress={playPauseToggle}
      >
        <Text style={styles.buttonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  songTitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  slider: {
    width: '80%',
    height: 40,
  },
  playPauseButton: {
    backgroundColor: '#1DB954',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default Player;
