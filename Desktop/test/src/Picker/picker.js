import React, { Component } from "react";
import { StyleSheet, Text, View, Picker, Slider } from "react-native";

class PickerComponent extends Component {
  state = {
    language: "english",
    value: 50
  };

  handleSliderChange = value => {
    this.setState({
      value: parseInt(value)
    });
  };

  render() {
    return (
      <View style={{ width: "100%" }}>
        <Picker
          style={{ width: "100%" }}
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({
              language: itemValue
            });
          }}
        >
          <Picker.Item label="Spanish" value="spanish" />
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Japanese" value="japanese" />
        </Picker>
        <Slider
          value={this.state.value}
          // maximumValue={100}
          // minimumValue={1}
          // step={20} goes in intervals of 20
          onValueChange={this.handleSliderChange}
        />
      </View>
    );
  }
}

export default PickerComponent;
