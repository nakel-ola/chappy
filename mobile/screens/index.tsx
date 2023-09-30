import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MessageText1,
  NotificationBing,
  Profile2User,
  User,
} from "iconsax-react-native";
import { View } from "react-native";
import Chats from "./Chats";
import Friends from "./Friends";
import Notification from "./Notification";
import Profile from "./Profile";

type ScreensProps = {
  onReady(): void;
};

export default function Screens(props: ScreensProps) {
  const { onReady } = props;
  return (
    <NavigationContainer onReady={onReady}>
      <TabGroup />
    </NavigationContainer>
  );
}

// Stacks

const ChatsStack = createNativeStackNavigator();

const ChatsStackGroup = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats} />
    </ChatsStack.Navigator>
  );
};

// Tab Bottom

const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#6c45c0",
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "ChatsStackGroup":
              return <MessageText1 variant="Bulk" size={30} color={color} />;
            case "Friends":
              return <Profile2User variant="Bulk" size={30} color={color} />;
            case "Notification":
              return (
                <NotificationBing variant="Bulk" size={30} color={color} />
              );
            case "Profile":
              return <User variant="Bulk" size={30} color={color} />;

            default:
              return <View />;
          }
        },
      })}
    >
      <Tab.Screen
        name="ChatsStackGroup"
        component={ChatsStackGroup}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
