import React from "react";
import { StyleSheet, View, ScrollView,} from "react-native";
import Form from "../component/Form";
import ListFlate from "../component/ListFlate";
import ListMap from "../component/ListMap";
import ListSection from "../component/ListSection"
import DynamicGrid from "../component/DynamicGrid"
import UsigUseEffect from "../component/UsingUseEffect"
export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <ScrollView >
        {/* <Form /> */}
        {/* <ListFlate /> */}
        {/* <ListMap /> */}
        {/* <DynamicGrid /> */}
        {/* <ListSection /> */}
        <UsigUseEffect />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2", // Light background for the screen
    marginTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
