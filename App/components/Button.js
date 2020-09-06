import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'components/Icon';

const Button = ({ label, label_style, style, onPress, icon }) => {
  let icon_image;
  if (icon) {
    icon_image = <Icon 
                  iosName={icon.iosName}
                  aosName={icon.aosName} 
                  size={icon.size} 
                  color={icon.color}
                  style={styles.icon}
                />
  }

  return (
    <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onPress}>
      {icon_image}
      <Text style={[styles.labelText, label_style]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    buttonStyle: {
        width: '100%',
        height: 40,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333333',
        flexDirection: 'row'
    },

    labelText: {
        color: '#FFFFFF'
    },

    icon: {
      marginRight: 10
    }
})