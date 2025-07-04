import AddNewSong from '../Screen/AdNewSong';
import PlayList from '../Screen/playList';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const PlayListStack = createStackNavigator();

const PlayListNavigator = () => {
  return (
    <PlayListStack.Navigator initialRoutename={AddNewSong}>
      <PlayListStack.Screen
        name='PlayList'
        component={PlayList}
        options={{ headerShown: false }}
      />
      <PlayListStack.Screen
        name='AddNewSong'
        component={AddNewSong}
        options={{ headerShown: false }}
      />
    </PlayListStack.Navigator>
  );
};

export default PlayListNavigator;
