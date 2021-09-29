import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const AddTodo = ({submitHandler, changeHandler, text, setText}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        color="#6495ed"
        onPress={() => submitHandler(text)}
        title="add todo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
