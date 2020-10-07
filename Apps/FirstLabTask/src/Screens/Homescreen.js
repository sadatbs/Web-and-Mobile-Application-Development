import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  //console.log(props);
  return (
    <View>
      <Text style={styles.textStyle}>Department of CSE</Text>
      <Text style={styles.textStyle}>Programme: SWE</Text>
      <Button style = {styles.stretchContent}
        title="Semester Wise Course List"
        onPress={function () {
          props.navigation.navigate("Faculty List")
        }}
      />

      <Button style = {styles.stretchContent}
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
stretchContent: {
    flex: 1,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;