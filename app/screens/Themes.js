import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

import { Ionicons } from '@expo/vector-icons';

const styles=EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrage',
  $purple: '$primaryPurple',
})

class Themes extends Component {

  handlThemesPress= (color) =>{
    console.log('pressed theme', color)
  }

  render(){
    return(
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem
          text="blue"
          onPress={() => this.handlThemesPress(styles.$blue)}
          selected
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Orage"
          onPress={() => this.handlThemesPress(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlThemesPress(styles.$orange)}
          selected
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlThemesPress(styles.$purple)}
          selected
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    )
  }
}


export default Themes;
