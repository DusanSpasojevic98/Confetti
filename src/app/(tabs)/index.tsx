import React from "react";
import { Text, View } from "react-native";
import { Confetti } from "typegpu-confetti/react-native";

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
      <Confetti initParticleAmount={200} />
    </View>
  );
};

export default index;
