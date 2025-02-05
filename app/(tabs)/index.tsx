import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Form from "../component/Form";
import ListFlate from "../component/ListFlate";
import ListMap from "../component/ListMap";
import ListSection from "../component/ListSection";
import DynamicGrid from "../component/DynamicGrid";
import UsigUseEffect from "../component/UsingUseEffect";
import ShowHideComponent from "../component/ShowHideComponent";
import UnmountComponent from "../component/UnmountComponent";
import ResponsiveLayout from "../component/ResponsiveLayout"
import ButtonStyle from "../component/ButtonStyle"
import RadioButton from "../component/RadioButton"
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Form />
        <ListFlate />
        <ListMap />
        <DynamicGrid />
        <ListSection />
        <UsigUseEffect />
        <ShowHideComponent />
        <UnmountComponent />   
        <ResponsiveLayout />
        <ButtonStyle />
        */}
        <RadioButton />
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
