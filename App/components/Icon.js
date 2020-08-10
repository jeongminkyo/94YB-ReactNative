import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {
  if (Platform.OS === 'ios') {
    return <Icon name={props.iosName} {...props} />;
  } else {
    return <Icon name={props.aosName} {...props} />;
  }
};
