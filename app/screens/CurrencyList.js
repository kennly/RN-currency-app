import React, { Component } from 'react';
import { View, FlatList, Text, StatusBar } from 'react-native';
import currencies from '../data/currencies.js';
import { ListItem } from '../components/List';

const CurrencyList = () => {

  const TEMP_CURRENT_CURRENCY = 'AUD';

  handlePress = () => {
    console.log('pressed');
  }

  return (
    <View style={{ flex: 1}}>
    <StatusBar barStyle="default" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) =>(
          <ListItem
            text={item}
            selected={ item === TEMP_CURRENT_CURRENCY}
            onPress={this.handlePress}
          />  
        )}
        keyExtractor={item => item}
        />
    </View>
  )
};


export default CurrencyList;
