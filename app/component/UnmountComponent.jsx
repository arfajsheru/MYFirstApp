import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Button, Alert} from "react-native"
const UnmountComponent = () => {
    const[unmount, setUnmount] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>8. UseEffect For Unmount Component</Text>

        <Button title="Unmount componet" color={"lightgreen"} onPress={() => setUnmount(!unmount)} />
            {unmount &&  <Unmount />}
      
    </View>
  );
};


const Unmount = () => {
  useEffect(() => {

    var timer = setInterval(() => {
      alert("Hello Hii! My name is Unmount. I will show you to ten ten seconds. if you want to close me go to 8. useEffect For Unmount Component and click on unmount component button");   // ye tabhi work karega jab component mount ho raha he thik he.means ki jab componet unmount hoyge to ye nahi chalega.
    },10000)
    
    return () => {
      // Alert.alert("Component show","Chal bhai tu apni responsibility sambhal tune hi muje unmount kiya na chal. 😂"); // ye kaam componet ko unmoun tkarne ke liye hi he jaise ham componetn ko unmount karenge to ye line hamari chalegi thik he
      // setInterval(() => {
      //   alert("haa bhai padhai kyu nahi ho rahai")
      // }, 2000);

      clearInterval(timer)
    }
  },[])
    return (
        <View>
            <Text style={{fontSize:20,fontWeight:500}}>My Name is Component!😊</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f9f9f9", // light background for the container
      justifyContent: "center",
      alignItems: "center",
    },
    titleText: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
      marginBottom: 20,
    },
})
export default UnmountComponent;
