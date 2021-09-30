import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const TodoItems = ({item, deleteTodos, editTodo}) => {
  const [text, setText] = useState(item.text);
  const changeHandler = val => {
    setText(val);
  };

  useEffect(() => {
    setText(item.text);
  }, [item.text]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cocomo}>
        <TextInput
          style={styles.item}
          value={text}
          onChangeText={changeHandler}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => editTodo(item.id, text)}>
        <Icon style={styles.closeBtn} name="arrow-right" type="Feather" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTodos(item.id)}>
        <Icon style={styles.closeBtn} name="delete" type="AntDesign" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 1,
    borderRadius: 10,
  },
  closeBtn: {
    padding: 10,
    marginTop: 15,
  },
  cocomo: {
    flex: 1,
  },
});

export default TodoItems;
