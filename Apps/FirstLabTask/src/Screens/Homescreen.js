import React from "react";
import { Text, StyleSheet, View, Button,Image,TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return (
    <View style={{
        justifycontent:'center'
      }}>
        <Image
         style={{
        alignSelf:'center'
      }}  source = {require('./../../assets/IUTlogo.jpg')} 
        />
      <Text style={styles.textStyle}>Department of CSE</Text>
      <Text style={styles.textStyle}>Programme: SWE</Text>
      <TouchableOpacity
      onPress = {function (){
        props.navigation.navigate("Profile")
      }
      }>
        <Text style={styles.textStyle}>My Profile</Text>
      </TouchableOpacity>
      
      <Button 
        title="Semester Wise Course List"
        onPress={function () {
          props.navigation.navigate("Semesters")
        }}
      />

     <View style={{
         width:20,
         height:20
    }} />

      <Button 
        title="List of Faculty Members"
        onPress={function () {
          props.navigation.navigate("Faculty List");
          console.log("Button pressed")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    marginVertical: 20
},
});

export default HomeScreen;