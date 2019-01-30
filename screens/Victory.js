import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import {VictoryPie} from 'victory-native';
import styles from './styles'


const data = [
  { x: "followed", y: 4 },
  { x: "not followed", y: 12 },
  { x: "urgent", y: 3 },
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Victory lib',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <View pointerEvents="none">
                  <VictoryPie width={200} height={200} data={data} innerRadius={15} labels={() => { }} colorScale={["#64DD17", "#FF6E00", "#FF3D00"]} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}