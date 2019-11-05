import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

const CardStackComp = ({ props }) => {
  if (!props) return null;

  return (
    <CardStack
      style={styles.content}
      renderNoMoreCards={() => (
        <Text style={{ fontWeight: '200', fontSize: 18, color: 'gray' }}>
          No more cards :(
        </Text>
      )}
      ref={swiper => (this.swiper = swiper)}
      onSwiped={() => console.log('onSwiped')}
      onSwipedLeft={() => console.log('onSwipedLeft')}
    >
      {props.map((card, i) => {
        return (
          <Card style={[styles.card, styles.card1]} key={i}>
            <Text style={styles.label}>{card}</Text>
          </Card>
        );
      })}
    </CardStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a'
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d'
  }
});

export default CardStackComp;
