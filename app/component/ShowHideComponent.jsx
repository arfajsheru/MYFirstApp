import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ShowHideComponent = () => {
  const [hide, setHide] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>7. Show / Hide Component</Text>

      <View style={styles.buttonContainer}>
        <Button title="Hide Component" onPress={() => setHide(true)} color="#ff6f61" />
        <Button title="Show Component" onPress={() => setHide(false)} color="#6dbf65" />
        <Button title="Toggle Component" onPress={() => setHide(!hide)} color="#007bff" />
      </View>

      <View style={styles.componentContainer}>
        {hide ? <HideComponent /> : <ShowComponent />}
      </View>
    </View>
  );
};

export const HideComponent = () => {
  return (
    <View style={styles.component}>
      <Text style={styles.titleText}>My Name Is Hide Component</Text>
    </View>
  );
};

export const ShowComponent = () => {
  return (
    <View style={styles.component}>
      <Text style={styles.titleText}>My Name Is ShowComponent</Text>
    </View>
  );
};

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
  buttonContainer: {
    gap: 12,
    marginBottom: 20,
    width: "80%",
  },
  componentContainer: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  component: {
    padding: 15,
    backgroundColor: "#D1E8E2", // Light greenish background for components
    borderRadius: 10,
    marginTop: 15,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // for android shadow effect
  },
});

export default ShowHideComponent;
