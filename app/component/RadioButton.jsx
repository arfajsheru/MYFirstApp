import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animation } from "react-native";
const RadioButton = () => {
  const [radio, setRadio] = useState(1);
  return (
    <>
      <Text style={styles.titleText}>
        11. RadioButton style in React-Native
      </Text>
      <View style={styles.container}>
        <View style={styles.radioWrapper} >
          <TouchableOpacity onPress={() => setRadio(1)}>
            <View style={styles.radioBorder}>
              {radio === 1 ? <View style={styles.radioActive}></View> : null}
            </View>
          </TouchableOpacity>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>

        <View style={styles.radioWrapper}>
          <TouchableOpacity onPress={() => setRadio(2)}>
            <View style={styles.radioBorder}>
              {radio === 2 ? <View style={styles.radioActive}></View> : null}
            </View>
          </TouchableOpacity>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 400,
    gap: 10,
    backgroundColor: "gray", // light background for the container
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  radioText: {
    fontSize: 20,
    color: "white",
    fontWeight: 700,
  },
  radioBorder: {
    height: 35,
    width: 35,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
  radioActive: {
    height: 25,
    width: 25,
    backgroundColor: "white",
    borderRadius: 20,
    margin: 3,
  },
});
export default RadioButton;
