import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const UsingUseEffect = () => {
    const [num, setNum] = useState(0);
    const prevNum = useRef(num);
  useEffect(() => {
    if(num !== prevNum.current){
        if(num > prevNum.current){
            Alert.alert("Increment", `value  increase to ${prevNum.current + 1}`);
        } else{
            Alert.alert("Decrement", `value  deacrease to ${prevNum.current - 1}`);
        }
    }

    prevNum.current = num;
  }, [num]);
  const handleIncrement = () => {
    setNum(num + 1);
  };
  const handleDecrement = () => {
    setNum(num - 1);
  };

  return (
    <View>
      <Text style={styles.titleText}>6. Life Cycle With UseEffect</Text>

      <View style={styles.numBox}>
        <Text style={styles.textNum}>{num}</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 25,
        }}
      >
        <Button title="Increment" onPress={handleIncrement} />
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  numBox: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textNum: {
    fontSize: 100,
    fontWeight: 900,
    color: "gray",
  },
});
export default UsingUseEffect;
