import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const CourseListScreen = (props) => {
  const sem1course = [
    { name: "Hum 4145 ", key:"1" },
    { name: "SWE 4101 ", key:"2" },
    { name: "Phy 4143", key:"3" },
    { name: "Math 4141", key:"4" },
    { name: "Hum 4147 ", key:"5" },
    { name: "CSE 4107 ", key:"6" },
  ];
  const sem2course = [
    { name: "SWE 4201 ", key:"1" },
    { name: "CSE 4205 ", key:"2" },
    { name: "CSE 4203", key:"3" },
    { name: "Math 4241", key:"4" },
    { name: "Hum 4249 ", key:"5" },
    { name: "Hum 4247 ", key:"6" },
  ];
  const sem3course = [
    { name: "SWE 4301 ", key:"1" },
    { name: "CSE 4309 ", key:"2" },
    { name: "CSE 4307 ", key:"3" },
    { name: "CSE 4305", key:"4" },
    { name: "CSE 4303 ", key:"5" },
    { name: "Math 4341 ", key:"6" },
  ];

  const sem = props.route.params.sem;
  let courses = null;

  if(sem === '1st')
  {
    courses = sem1course;
  }else if(sem === '2nd')
  {
    courses = sem2course;
  }else if(sem === '3rd')
  {
    courses = sem3course;
  }

  return (
    <View style={styles.viewStyle}>
      <FlatList
        style={styles.ListStyle}
        data={courses}
        renderItem={function ({ item }) {
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
  },
  ListStyle: {},
});

export default CourseListScreen;