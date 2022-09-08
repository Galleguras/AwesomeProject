import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import Saludar from "./src/components/Saludar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Curso React Native</Text>
        <Saludar firstName="Pablo" lastName="Perez Sol" />
        <Saludar firstName="Luis" lastName="Lopez Gla" />
        <Saludar firstName="Sergio" lastName="Nistal Ver" />
        <Saludar />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
