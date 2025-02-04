import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

const ListSection = () => {
  const data = [
    {
      title: "Arfaj Sheru",
      data: ["Java", "JavaScript", "Python", "ReactJs", "Laravel"],
    },
    {
      title: "Haris Bhoraniya",
      data: ["NodeJs", "PHP", "C++", "ReactJs", "MongoDb"],
    },
    {
      title: "Owais Marediya",
      data: ["Python", "PHP", "Dart", "Node js", "ExpressJs"],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        5. Student Data List With SectionList
      </Text>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.headerText}>{section.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    padding: 10,
  },
  itemText: {
    fontSize: 18,
    padding: 10,
  },
});

export default ListSection;
