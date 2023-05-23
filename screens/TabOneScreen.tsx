import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Image } from "expo-image";

const IMAGE_ONE = "https://picsum.photos/id/76/300/300";
const IMAGE_ONE_PLACEHOLDER = "https://picsum.photos/id/76/50/50";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text>{IMAGE_ONE}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Image
        style={{ width: 300, height: 300 }}
        source={IMAGE_ONE}
        placeholder={IMAGE_ONE_PLACEHOLDER}
        placeholderContentFit="cover"
        recyclingKey={IMAGE_ONE}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
