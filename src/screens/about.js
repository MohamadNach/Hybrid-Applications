import { View, Text, Button } from "react-native";
import { screens } from ".";

export default ({ navigation }) => {
  return (
    <View>
      <Text> This is my first applaication</Text>

      {screens.map((s) => (
        <Button
          key={s.name}
          title={s.name}
          onPress={() => navigation.navigate(s.name)}
        ></Button>
      ))}
      {/*
      <Button
        title="COUNTER2"
        onPress={() => navigation.navigate("Counter2")}
      ></Button>
      */}

      <Button title="os" onPress={() => navigation.navigate("OS")}></Button>
    </View>
  );
};
