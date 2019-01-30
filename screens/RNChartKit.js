import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from './styles'

const data = [
  { x: "followed", y: 4, color: "#64DD17" },
  { x: "not followed", y: 12, color: "#FF6E00" },
  { x: "urgent", y: 3, color: "#FF3D00" },
];

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'React Native Chart Kit',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <View pointerEvents="none">
              <PieChart data={data} chartConfig={chartConfig} backgroundColor="transparent" accessor="y" width={350} height={200}></PieChart>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}