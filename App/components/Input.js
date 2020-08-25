import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}) => {
  return (
    <View style={[style, styles.container]}>
      <TextInput
        style={styles.inputStyle}
        selectionColor="#FFFFFF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        autoCorrect={false}
        allowFontScaling={false}
        placeholderTextColor="#FFFFFF"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
        borderColor: '#ced4da',
        borderWidth: 1
    },

    inputStyle: {
        flex: 1,
        color: '#000000'
    }
})