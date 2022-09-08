import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button
        title="Enviar"
        onPress={() => {
          console.log("enviado");
        }}
      />
      <Text>LoginForm</Text>
    </View>
  );
}
//const styles = StyleSheet.create({ first });
