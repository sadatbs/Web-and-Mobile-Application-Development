import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyListScreen = () => {
  const faculty = [
    { name: "Mohayeminul Islam", key:"1" },
    { name: "Tajkia Toma", key:"2" },
    { name: "Tahsin Ahmed", key:"3" },
    { name: "Ahnaf Munir", key:"4" },
    { name: "Bakhtiar Hassan", key:"5" },
  ];


  return (
    <View style={styles.viewStyle}>
      <FlatList
        style={styles.ListStyle}
        data={faculty}
        renderItem={function ({ item }) {
          //there is an error "Text strings must be rendered within a <Text> component"
          return <Text style={styles.textStyle}>{item.key+"."+item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "black",
    marginVertical: 20,
  },
  viewStyle: {
    borderColor: "red",
    borderWidth: 0,
  },
  ListStyle: {},
});

export default FacultyListScreen;