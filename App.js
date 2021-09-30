import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItems from './components/todoItems';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy chocolates', id: '1'},
    {text: 'create an app', id: '2'},
    {text: 'play cricket', id: '3'},
    {text: 'drive car', id: '4'},
  ]);

  const submitTodo = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        [{text, id: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert(
        'Input should be something',
        'Todo must be over 3 characters long',
        [{text: 'Understood'}],
      );
    }
  };

  const deleteTodos = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id);
    });
  };

  const editTodo = (id, text) => {
    // const updatedTodo = todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.text = text;
    //   } else {
    //     return todo;
    //   }
    //   console.log('todos', todos);
    // });
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitTodo={submitTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={todo => todo.id}
              renderItem={({item}) => (
                <TodoItems
                  item={item}
                  deleteTodos={deleteTodos}
                  editTodo={editTodo}
                />
              )}

              // <TodoItems
              //   item={item}
              //   deleteTodos={deleteTodos}
              //   editTodo={editTodo}
              // />
            />
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
