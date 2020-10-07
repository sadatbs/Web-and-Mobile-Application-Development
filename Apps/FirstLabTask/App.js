import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/Homescreen';
import FacultyListScreen from './src/Screens/FacultyListScreen';
import ProfileScreen from './src/Screens/ProfileScreen'

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component = {HomeScreen}/>
        <stack.Screen name="Faculty List" component = {FacultyListScreen}/>
        <stack.Screen name="Profile" component = {ProfileScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;