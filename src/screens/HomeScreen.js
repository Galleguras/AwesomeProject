import { SafeAreaView, Text, Button } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  const { navigation } = props;
  const goToSeetings = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScrefffen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSeetings} title="Ir a Ajustes" />
    </SafeAreaView>
  );
}
