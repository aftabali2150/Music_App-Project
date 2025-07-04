import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AudioList from '../AudioList';
import PlayListNavigator from './PlayListNavigator';
import Player from '../Screen/player';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='AudioList' component={AudioList} />
      <Tab.Screen name='Player' component={Player} />
      <Tab.Screen name='PlayList' component={PlayListNavigator} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
