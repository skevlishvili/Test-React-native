import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from "react-native";

class Input extends Component {
  state = {
    myInput: "",
    users: ["John", "James", "Francis", "Lisa", "Martha", "Steve"]
  };

  onChangeInput = value => {
    this.setState({
      myInput: value
    });
  };

  onAddUser = () => {
    this.setState(prevState => {
      return {
        myInput: "",
        users: [...prevState.users, prevState.myInput]
      };
    });
  };

  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          value={this.state.myInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          // multiline={True} // makes the input go to the next line
          // maxLength={5}
          // editable={false}
          // autoCapitalize={'none'} has 4 inputs none does nothing, characters all caps lock, words every words fist letter is capital, sentence same but with sentences.
        />
        <Button title="Add User" onPress={this.onAddUser} />
        {this.state.users.map(item => (
          <Text style={styles.users} key={item}>
            {item}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    marginTop: 20,
    fontSize: 20,
    padding: 10
  },
  inputWrapper: {
    width: "100%"
  },
  users: {
    fontSize: 40,
    borderWidth: 1,
    borderColor: "#cecece",
    padding: 10,
    marginBottom: 20
  }
});
export default Input;
