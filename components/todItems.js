import {Icon} from 'native-base';
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const TodoItems = ({item, pressHandler, editTodo}) => {
  const [text, setText] = useState(item.text);
  const changeHandler = val => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cocomo} onPress={() => editTodo(text)}>
        {/* <Text style={styles.item}>{item.text}</Text> */}
        <TextInput
          style={styles.item}
          value={text}
          onChangeText={changeHandler}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => editTodo(item.id, item.text)}>
        <Icon style={styles.closeBtn} name="arrow-right" type="Feather" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
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
