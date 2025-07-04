// App.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import AudioList from './app/Screen/AudioList';
import Player from './app/Screen/player';
import PlayListNavigator from './app/navigation/PlayListNavigator';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let iconStyle;

            if (route.name === 'AudioList') {
              iconName = 'headset';
              iconStyle = styles.headsetIcon;
            } else if (route.name === 'Player') {
              iconName = 'play-circle-filled';
              iconStyle = styles.playerIcon;
            } else if (route.name === 'PlayList') {
              iconName = 'playlist-play';
              iconStyle = styles.playlistIcon;
            }

            return (
              <MaterialIcons
                name={iconName}
                size={size}
                color={color}
                style={iconStyle}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'black',
          },
          labelStyle: {
            fontSize: 14,
            fontFamily: 'Roboto',
          },
        }}
      >
        <Tab.Screen name='AudioList'>{() => <AudioList />}</Tab.Screen>
        <Tab.Screen name='Player' component={Player} />
        <Tab.Screen name='PlayList' component={PlayListNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    width: '100%',
  },
  songImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
  },
  artistName: {
    fontSize: 14,
    color: 'gray',
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    width: '100%',
  },
  playlistImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  playlistTitle: {
    fontSize: 18,
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  currentSongTitle: {
    fontSize: 20,
    marginTop: 10,
  },
  albumCover: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  headsetIcon: {
    color: 'green',
    marginLeft: 5,
    marginRight: 5,
  },
  playerIcon: {
    color: 'blue',
    marginLeft: 5,
    marginRight: 5,
  },
  playlistIcon: {
    color: 'orange',
    marginLeft: 5,
    marginRight: 5,
  },
  addButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  addButtonLabel: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  // Added styles for screen titles
  audioListScreenTitle: {
    color: 'green', // Change to your desired color
    // Add more styles if needed
  },
  playlistScreenTitle: {
    color: 'orange', // Change to your desired color
    // Add more styles if needed
  },
});

export default App;
