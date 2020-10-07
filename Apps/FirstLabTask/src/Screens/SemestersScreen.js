import React from "react";
import { render } from "react-dom";
import { Text, StyleSheet, View, Button,Image,TouchableOpacity,FlatList } from "react-native";

const SemesterScreen = (props) => {
    const semester = [
        {name: "1st",key:"1"},
        {name: "2nd",key:"2"},
        {name: "3rd",key:"3"},
    ]
    return(
        <View>
            <FlatList
                data = {semester}
                renderItem = { function({item}){
                    return(
                        <TouchableOpacity  
                        onPress = { function(){
                            props.navigation.navigate("Courses",{
                                sem: item.name,
                            });
                        }
                        }>
                            <Text style = {styles.textStyle}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }

                }

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

  export default SemesterScreen;