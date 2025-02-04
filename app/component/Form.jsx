import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form = () => {
  // State variables for Name, Email, Password, and Display
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const handleResetData = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>1. Simple Form In React Native</Text>

      <View style={styles.inputPart}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.inputStyle}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputPart}>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.inputStyle}
          placeholder="Enter your Email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputPart}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.inputStyle}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
      </View>

      <View style={{ gap: 6 }}>
        <Button
          title="Data Save"
          color={"green"}
          onPress={() => setDisplay(!display)}
        />
        <Button
          title="Data Remove"
          color={"red"}
          onPress={handleResetData}
        />
      </View>

      {display && (
        <View style={{ borderWidth: 2, padding: 2 }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
              color: "green",
            }}
          >
            Data Successfully Saved!
          </Text>
          <Text style={{ fontSize: 22 }}>Name: {name}</Text>
          <Text style={{ fontSize: 22 }}>Email: {email}</Text>
          <Text style={{ fontSize: 22 }}>Password: {password}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputPart: {
    marginBottom: 15,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 16,
  },
});

export default Form;
