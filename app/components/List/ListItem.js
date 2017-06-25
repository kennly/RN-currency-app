import React, { PropTypes } from 'react';
import { Text,View, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text, selected, onPress, checkmark = true, visible = true, customIcon = null, iconBackground
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground}/> : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visiable: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string
}

export default ListItem;
