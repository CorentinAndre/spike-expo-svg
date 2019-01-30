import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import VictoryScreen from '../screens/Victory';
import D3Screen from '../screens/D3Svg';
import RNChartKitScreen from '../screens/RNChartKit'

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

const RNChartKitStack = createStackNavigator({
  RNChartKit: RNChartKitScreen,
})

RNChartKitStack.navigationOptions = {
  tabBarLabel: "RN Chart Kit",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cog' : 'md-cog'}
    />
  )
}


export default createBottomTabNavigator({
  VictoryStack,
  D3Stack,
  RNChartKitStack,
});
