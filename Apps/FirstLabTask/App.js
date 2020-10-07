import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/Homescreen';
import ListScreen from './src/Screens/FacultyListScreen';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component = {HomeScreen}/>
        <stack.Screen name="Faculty List" component = {ListScreen}/>

        
       
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;