import React, { PropTypes } from 'react';
import { Text,View, TouchableHighlight } from 'react-native';

const ListItem = ({text, selected, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View>
      <Text>{text}</Text>
      {selected? <Text>selected</Text> : null}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
}

export default ListItem;
