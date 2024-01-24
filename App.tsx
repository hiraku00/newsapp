import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./newsapi_types";
import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import NewsScreen from "./screens/NewsScreen";
import DetailScreen from "./screens/DetailScreen";
import WeatherScreen from "./screens/WeatherScreen";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerTitle: "News List" }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerTitle: "Details" }}
      />
    </Stack.Navigator>
  );
};

const WeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WeatherScreen"
        component={WeatherScreen}
        options={{ headerTitle: "Weather" }}
      />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }: { route: { name: string } }) => ({
  tabBarIcon: ({ color, size }: { color: string; size: number }) => {
    let iconName: IconProps<"newspaper-o" | "sun-o">["name"] = "newspaper-o";
    if (route.name === "News") {
      iconName = "newspaper-o";
    } else if (route.name === "Weather") {
      iconName = "sun-o";
    }

    // You can return any component that you like here!
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen
          name="News"
          component={NewsStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Weather"
          component={WeatherStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
