import React from "react";
import { View, Text, StyleSheet } from "react-native";
const DynamicGrid = () => {
  const data = [
    {
      id: 1,
      name: "Arfaj",
    },
    {
      id: 2,
      name: "Haris",
    },
    {
      id: 3,
      name: "Owais",
    },
    {
      id: 4,
      name: "Anas",
    },
    {
      id: 5,
      name: "Hannan",
    },
    {
      id: 6,
      name: "Zain",
    },
    {
      id: 7,
      name: "Ahmed",
    },
    {
      id: 8,
      name: "Sami",
    },
    {
      id: 9,
      name: "Tariq",
    },
    {
      id: 10,
      name: "Khan",
    },
    {
      id: 11,
      name: "zubair",
    },
    {
      id: 12,
      name: "Zafar",
    },
  ];

  return (
    <View>
      <Text style={styles.titleText}>4. Make Dynamic Grid</Text>
      <View style={{flex:1, flexDirection:'row', flexWrap:'wrap'}}>
        {data.map((item, index) => 
         <View key={item.id || index} style={styles.textbox}>
         <Text style={styles.boxtext}>{item.id}</Text>
         <Text style={styles.boxtext}>{item.name}</Text>
       </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  textbox: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  boxtext: {
    fontSize: 25,
    fontWeight: 800,
    color: "white",
  },
});

export default DynamicGrid;
