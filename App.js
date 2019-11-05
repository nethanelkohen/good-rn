/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
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
import CardStackComp from './components/CardStackComp';

const App = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appZMgR9pD6VLbul4/cards?api_key=keyypKPU2uc5kzZFw'
    )
      .then(resp => resp.json())
      .then(data => {
        data.records.map(rec => {
          setCards(prevState => [...prevState, rec.fields.text]);
        });
      })
      // .then(() => setCards(prevState => [...prevState, '']))
      .catch(err => err);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [cards]);

  useEffect(() => {
    setDimensions({
      width: Math.round(Dimensions.get('window').width),
      height: Math.round(Dimensions.get('window').height)
    });
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CardStackComp props={cards} />

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.red]}
            onPress={() => {
              this.swiper.swipeLeft();
            }}
          >
            <Image
              source={require('./trash.png')}
              resizeMode={'contain'}
              style={{ height: 62, width: 62 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.orange]}
            onPress={() => {
              this.swiper.goBackFromLeft();
            }}
          >
            <Image
              source={require('./trash.png')}
              resizeMode={'contain'}
              style={{ height: 32, width: 32, borderRadius: 5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.green]}
            onPress={() => {
              this.swiper.swipeRight();
            }}
          >
            <Image
              source={require('./trash.png')}
              resizeMode={'contain'}
              style={{ height: 62, width: 62 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
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

export default App;
