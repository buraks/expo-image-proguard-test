import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Image } from "expo-image";

const IMAGE_TWO = "https://picsum.photos/id/84/300/300";
const IMAGE_TWO_PLACEHOLDER = "https://picsum.photos/id/84/50/50";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text>{IMAGE_TWO}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Image
        style={{ width: 300, height: 300 }}
        source={IMAGE_TWO}
        placeholder={IMAGE_TWO_PLACEHOLDER}
        placeholderContentFit="cover"
        recyclingKey={IMAGE_TWO}
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
