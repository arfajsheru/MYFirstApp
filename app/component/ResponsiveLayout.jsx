import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResponsiveLayout = () => {
  return (
    <>
      <Text style={styles.titleText}>9. Responsive Layout With Flex</Text>
      <View style={styles.container}>
        <View style={styles.parent1}>
          <View style={[styles.child, { backgroundColor: "pink" }]}>
            <Text style={styles.textBox}>child 1</Text>
          </View>
          <View style={[styles.child, { backgroundColor: "grey" }]}>
            <Text style={styles.textBox}>child 2</Text>
          </View>
          <View style={[styles.child, { backgroundColor: "purple" }]}>
            <Text style={styles.textBox}>child 3</Text>
          </View>
        </View>
        <View style={styles.parent2}>
          <Text style={styles.textBox}>Parent 1</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "750",
    padding: 5,
    backgroundColor: "green",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  textBox: {
    fontSize: 20,
    fontWeight: "800",
    color: "#00bfff",
    textAlign: "center",
  },
  parent1: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  parent2: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  child: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export default ResponsiveLayout;
