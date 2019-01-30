import React from 'react';
import * as d3 from 'd3';
import { Svg } from 'expo';
import { ScrollView, StyleSheet, View } from 'react-native';
import styles from './styles'

const {G, Path} = Svg;

const data = [
  { x: "followed", y: 4 },
  { x: "not followed", y: 12 },
  { x: "urgent", y: 3 },
];

const sectionAngles = d3.pie().value(d => d.y)(data);
const colors = (index) => {
  return ["#FF6E00", "#64DD17", "#FF3D00"][index];
};
const path = d3.arc().outerRadius(50).innerRadius(15)
const size = 200;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'D3 with Expo SVG',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Svg height={size} width={size}>
            <G x={size / 2} y={size / 2}>
              {
                sectionAngles.map(section => {
                  console.log(section)
                  return <Path key={section.index} d={path(section)} fill={colors(section.index)} />
                })
              }
            </G>
          </Svg>

        </ScrollView>
      </View>
    );
  }
}


