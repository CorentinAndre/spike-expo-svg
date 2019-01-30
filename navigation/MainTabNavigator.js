import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import VictoryScreen from '../screens/Victory';
import D3Screen from '../screens/D3Svg';

const VictoryStack = createStackNavigator({
  Victory: VictoryScreen,
});

VictoryStack.navigationOptions = {
  tabBarLabel: 'Victory',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const D3Stack = createStackNavigator({
  D3: D3Screen,
});

D3Stack.navigationOptions = {
  tabBarLabel: 'D3',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


export default createBottomTabNavigator({
  VictoryStack,
  D3Stack,
});
