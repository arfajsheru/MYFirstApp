import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ButtonStyle = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          10. Style With Button in React-Native
        </Text>

        {/* Opacity decrease hoti he TouchableOpacity component se */}
        <TouchableOpacity onPress={() => alert('hello Hii! I am Primary Button')}>
          <Text style={[styles.commanStyle, styles.primary]}>Primary</Text> 
        </TouchableOpacity>

        {/* Static hi rehta hi kuch nahi hota he TouchableNativeFeedBack me */}
        <TouchableNativeFeedback onPress={() => alert('hello Hii! I am Secondary Button')}>
          <Text style={[styles.commanStyle, styles.secondary]}>Secondary</Text>
        </TouchableNativeFeedback>

        {/*  */}
        <TouchableHighlight onPress={() => alert('hello Hii! I am Success Button')}>
          <Text style={[styles.commanStyle, styles.success]}>Success</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => alert('hello Hii! I am Danger Button')}>
          <Text style={[styles.commanStyle, styles.danger]}>Danger</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => alert('hello Hii! I am Warning Button')}>
          <Text style={[styles.commanStyle, styles.warning]}>Warning</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => alert('hello Hii! I am Information Button')}>
          <Text style={[styles.commanStyle, styles.info]}>Inforamataion</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => alert('hello Hii! I am Dark Button')}>
          <Text style={[styles.commanStyle, styles.dark]}>Dark</Text>
        </TouchableHighlight>




      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9", // light background for the container
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },

  commanStyle: {
    fontSize: 20,
    fontWeight: 500,
    margin: 5,
    padding: 5,
    textAlign: "center",
    color:'white',
    shadowColor: "black",
    elevation: 15,
    shadowOpacity: 10,
  },
  primary:{
    backgroundColor:'#0069d9'
  },
  secondary:{
    backgroundColor:'#5a6268'
  },
  success:{
    backgroundColor:'green'
  },
  danger:{
    backgroundColor:'red'
  },
  warning:{
    backgroundColor:'yellow',
    color:'black'
  },
  info:{
    backgroundColor:'#138496'
  },
  dark:{
    backgroundColor:'black'
  },
});

export default ButtonStyle;
