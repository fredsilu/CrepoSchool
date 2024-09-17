import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }) {



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
  /*    <Button
        title="Ingredients"
        onPress={() => navigation.navigate("Ingredients")}
      />
      <Button
        title="Plats"
        onPress={() => navigation.navigate("Plats")}
      />
      <Button
        title="Commandes"
        onPress={() => navigation.navigate("Commandes")}
      />
      <Button
        title="Traiteurs"
        onPress={() => navigation.navigate("Traiteurs")}
      />  */
    </View>
  );
}
