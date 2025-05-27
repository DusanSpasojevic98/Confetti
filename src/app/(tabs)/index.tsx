import React from "react";
import { Text, View } from "react-native";
// import { Confetti } from "typegpu-confetti/react-native";

//App works when confetti code is commented out, but crashes when confetti code is uncommented.
const index = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 50,
        }}>
        Confetti!!!
      </Text>
      {/* <Confetti initParticleAmount={200} /> */}
    </View>
  );
};

export default index;
