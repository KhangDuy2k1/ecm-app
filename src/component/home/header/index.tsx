// components/CustomHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTsDgK5faSWP9Ngt_xnr4La9brpoOmYiss4WZCBBR-Q&s" }} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Hello, Khang!</Text>
      <Text style={styles.notificationIcon}>🔔</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    // flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationIcon: {
    fontSize: 24,
    // flex: 1
  },
});
