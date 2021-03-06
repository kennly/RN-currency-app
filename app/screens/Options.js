import React, { Component } from 'react';
import { ScrollView, FlatList, Text, StatusBar, Platform } from 'react-native';

import { ListItem, Separator } from '../components/List';
import { Ionicons } from '@expo/vector-icons';

const ICON_COLOR = '#868686'
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {

  handlThemesPress= () =>{
    console.log('pressed theme')
  }

  handlSitePress= () =>{
    console.log('pressed Site')
  }

  render(){
    return(
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem
          text="Themes"
          onPress={this.handlThemesPress}
          customIcon = {
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlSitePress}
          customIcon = {
            <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>
          }
        />
        <Separator />
      </ScrollView>
    )
  }
}


export default Options;
