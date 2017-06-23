import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import color from 'color';
import styles from './styles';

const ClearButton = ({text, onPress}) => {

  return (
     <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
          <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
          <Text style={styles.text}>{text}</Text>
        </View>
     </TouchableOpacity>
  )
};

ClearButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default ClearButton;
