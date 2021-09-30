import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const AddTodo = ({submitTodo}) => {
  [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  const pressHandler = () => {
    submitTodo(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button color="#6495ed" onPress={pressHandler} title="add todo" />
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
