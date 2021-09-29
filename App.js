import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItems from './components/todItems';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy chocolates', id: '1'},
    {text: 'create an app', id: '2'},
    {text: 'play cricket', id: '3'},
    {text: 'drive car', id: '4'},
  ]);
  const [todo, setTodo] = useState(todos.text);
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  const submitHandler = text => {
    if (text.length != 0) {
      setTodos(prevTodos => {
        return [{text, id: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert(
        'Input should be something',
        'Todo must be over 3 characters long',
        [{text: 'Understood'}],
      );
    }
    setText('');
  };

  const pressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
  };

  const editTodo = (text, id) => {
    setTodo(text);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo
            submitHandler={submitHandler}
            changeHandler={changeHandler}
            text={text}
            setText={setText}
          />
          <View style={styles.list}>
            <ScrollView>
              {React.Children.toArray(
                todos.map(item => (
                  <TodoItems
                    submitHandler={submitHandler}
                    item={item}
                    pressHandler={pressHandler}
                    editTodo={editTodo}
                  />
                )),
              )}
              {/* <FlatList
                data={todos}
                removeClippedSubviews={false}
                renderItem={({item}) => (
                  <TodoItems
                    submitHandler={submitHandler}
                    item={item}
                    pressHandler={pressHandler}
                    editTodo={editTodo}
                  />
                )}
                keyExtractor={item => item.id}
              /> */}
            </ScrollView>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export default App;
