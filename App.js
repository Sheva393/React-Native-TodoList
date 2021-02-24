
import React, {useState} from 'react';
import { StyleSheet, Text, View , FlatList , Alert } from 'react-native';
import {AppLoading} from 'expo'
import * as Font from 'expo-font'

import {Navbar} from './src/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


async function loadApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isReady,setIsReady] = useState(false)
  const [todoId,setTodoId] = useState(null)
  const [todos,setTodos] = useState([
    {id:'1', title:"Выучить React Native" }
  ])

  if(!isReady){ 
    return <AppLoading startAsync={loadApplication} onFinish={()=>setIsReady(true)} />
  }


  const addTodo = (title) => {

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title 
      }
    ])
  }

  const removeTodo= id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      'Delete ',
      `Are you sure to delete '${todo.title}'`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Delete', 
        onPress: () => {
          setTodoId(null)
          setTodos(prev => prev.filter(todo => todo.id !== id))
        } }
      ],
      { cancelable: false }
    );


    
  }

 const updateTodo = (id,title) => {
    setTodos(old => old.map(todo =>{
       if (todo.id === id){
         todo.title = title
       }
       return todo
    }))
 }
  
 
 let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  )

if(todoId) {
  const selectedTodo= todos.find(todo => todo.id === todoId)
  content = <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo} onSave={updateTodo}  />
} 


  return (
    <View >
      <Navbar />
      <View style={styles.container}>
      {content}
     
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:30,
    paddingVertical:20,
  },
});
