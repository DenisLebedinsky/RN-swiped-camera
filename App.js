import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Camera from "./components/Camera";

export default function App() {
  const [otherScrollEnable, setOtherScrollEnable] = useState(true);

  verticalScroll = index => {
    if (index !== 1) {
      setOtherScrollEnable(false);
    } else {
      setOtherScrollEnable(true);
    }
  };

  return (
    <Swiper
      loop={false}
      showsPagination={false}
      index={1}
      scrollEnabled={otherScrollEnable}
    >
      <View style={styles.slideDefault}>
        <Text style={styles.text}>Chat</Text>
      </View>
      <Swiper
        loop={false}
        showsPagination={false}
        horizontal={false}
        index={1}
        onIndexChanged={index => this.verticalScroll(index)}
      >
        <View style={styles.slideDefault}>
          <Text style={styles.text}>Search</Text>
        </View>
        <View style={{flex:1}}>
          <Camera />
        </View>
        <View style={styles.slideDefault}>
          <Text style={styles.text}>Memories</Text>
        </View>
      </Swiper>

      <View style={styles.slideDefault}>
        <Text style={styles.text}>Stories</Text>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
