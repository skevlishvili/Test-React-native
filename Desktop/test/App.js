import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image
} from "react-native";
import { blue } from "ansi-colors";

import Nav from "./src/Nav/nav";
import Generate from "./src/Generator/generate";
import ListItem from "./src/Generator/listItem";
import Input from "./src/Input/input";
import PickerComponent from "./src/Picker/picker";
import Sunset from "./src/assets/images/sunset.jpg";
import ModalComponent from "./src/Modal/modal";

class App extends Component {
  state = {
    nameOfApp: "My awesome app",
    random: [20, 13],
    loading: false
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      };
    });
  };

  onItemDelete = i => {
    const newArray = this.state.random.filter((item, index) => {
      return i !== index;
    });
    this.setState({
      random: newArray
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav nameOfApp={this.state.nameOfApp} />
        <ScrollView
          style={{ width: "100%" }}
          // onContentSizeChange={(w, h) => alert(h)}
          // onMomentumScrollBegin={() => alert("begin")}
          // onMomentumScrollEnd={() => alert("end")}
          onScrool={() => alert("scrolling")}
        >
          <View style={styles.wrapper}>
            <Generate add={this.onAddRandom} />

            <ListItem items={this.state.random} delete={this.onItemDelete} />
            {/* <Input />
            <PickerComponent />

            <ActivityIndicator
              size="large"
              color="red"
              animating={this.state.loading}
            /> */}

            {/* <Image
              source={Sunset}
              // source={{uri: 'whatever url you want'}}
              style={styles.sunset}
              resizeMode="contain"
              // onLoadEnd={() => alert("Image loaded")}
            /> */}

            <ModalComponent />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 40
  },
  wrapper: {
    flex: 1,
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  sunset: {
    width: "100%",
    height: 300,
    marginTop: 20
  }
});

export default App;
