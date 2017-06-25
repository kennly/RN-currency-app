import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const Separator = () => {

  return (
    <View
      style={styles.separator}
    >
    </View>
  )
};

Separator.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default Separator;
