import React from "react";
import { View, Text, StyleSheet } from "react-native";

const data = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
  { id: '3', name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  { id: '4', name: 'Emily Davis', email: 'emily.davis@example.com' },
  { id: '5', name: 'Chris Brown', email: 'chris.brown@example.com' }
];

const ListMap = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>3. Student Data List Using Map Function</Text>
      {data.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.textData}>
            {item.name}: <Text style={styles.email}>{item.email}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  textData: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  email: {
    fontWeight: 'bold',
    color: '#007BFF', // email text in blue color
  },
});

export default ListMap;
