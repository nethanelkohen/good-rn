import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

const Cards = ({ cards }) => {
  console.log('cards: ', cards);
  if (!cards) return null;
  return cards.map((card, i) => {
    return (
      <Card style={[styles.card, styles.card1]} key={i}>
        <Text style={styles.label}>{card}</Text>
      </Card>
    );
  });
};

const styles = StyleSheet.create({
  card: {
    width: Math.round(Dimensions.get('window').width * 0.9),
    height: Math.round(Dimensions.get('window').height * 0.7),
    backgroundColor: 'blue',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  },
  card1: {
    backgroundColor: '#FE474C'
  },
  card2: {
    backgroundColor: '#FEB12C'
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent'
  }
});

export default Cards;
