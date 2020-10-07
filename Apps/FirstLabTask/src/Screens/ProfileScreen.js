import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
    return(
        <View   style={{
                justifycontent:'center'
        }}>
            <Image  style={{
                    alignSelf:'center',
                    height: 200,
                    width : 200
      }}                   
                    source = {require('./../../assets/Myself.jpg')} 
        />
             <Text style={styles.textStyle}>Name: Sadat Bin Sharfuddin</Text>
             <Text style={styles.textStyle}>Student ID: 170042068</Text>
             <Text style={styles.textStyle}>Room no: N/A(Non-Residential)</Text>
             <Text style={styles.textStyle}>Email: sadatsharfuddin@iut-dhaka.edu</Text>

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

  export default ProfileScreen;