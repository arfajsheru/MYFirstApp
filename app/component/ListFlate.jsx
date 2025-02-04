import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Michael Johnson' },
  { id: '4', name: 'Emily Davis' },
  { id: '5', name: 'Chris Brown' }
];

const ListFlate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>2. Student Data List With Flatlist</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // light background for the container
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff', // white background for each item
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000', // subtle shadow effect for item
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555', // slightly lighter color for text
  },
});

export default ListFlate;
