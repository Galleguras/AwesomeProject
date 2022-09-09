import { View, Text, Button } from "react-native";
import React from "react";

export default function SettingsScreen(props) {
  const { navigation } = props;
  const goToPage = (pagename) => {
    navigation.navigate(pagename);
  };
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button
        onPress={() => {
          console.log("ir a home");
          goToPage("Home");
        }}
        title="Ir a Home"
      />
    </View>
  );
}
