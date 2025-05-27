import { ThemedText } from "@/src/components/ThemedText";
import React from "react";
import { View } from "react-native";
// import { Confetti } from "typegpu-confetti/react-native";

//App works when confetti code is commented out, but crashes when confetti code is uncommented.
const index = () => {
  return (
    <View>
      <ThemedText
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 50,
        }}>
        Confetti!!!
      </ThemedText>
      {/* <Confetti initParticleAmount={200} /> */}
    </View>
  );
};

export default index;
