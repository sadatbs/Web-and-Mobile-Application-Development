import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screens/Homescreen';
import FacultyListScreen from './src/Screens/FacultyListScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import SemesterScreen from './src/Screens/SemestersScreen';
import CoursesListScreen from './src/Screens/CourseListScreen'

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component = {HomeScreen}/>
        <stack.Screen name="Faculty List" component = {FacultyListScreen}/>
        <stack.Screen name="Profile" component = {ProfileScreen}/>
        <stack.Screen name="Semesters" component = {SemesterScreen}/>
        <stack.Screen name="Courses" component = {CoursesListScreen}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;