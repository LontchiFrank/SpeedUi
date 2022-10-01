import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./navigator/ Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
