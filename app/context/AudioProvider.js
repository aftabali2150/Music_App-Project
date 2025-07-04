// AudioProvider.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const AudioProvider = ({ playlist, setCurrentIndex }) => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playPauseToggle = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipToNextSong = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    const currentSongIndex = playlist.findIndex((song) => song.id === sound.id);
    const nextSongIndex = (currentSongIndex + 1) % playlist.length;

    setCurrentIndex(nextSongIndex);

    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: playlist[nextSongIndex].uri },
      { shouldPlay: true }
    );
    setSound(newSound);
    setIsPlaying(true);
  };

  return (
    <View>
      <TouchableOpacity onPress={playPauseToggle}>
        <MaterialIcons name={isPlaying ? 'pause' : 'play-arrow'} size={40} color="green" />
      </TouchableOpacity>
      <TouchableOpacity onPress={skipToNextSong}>
        <MaterialIcons name="skip-next" size={40} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

export default AudioProvider;
