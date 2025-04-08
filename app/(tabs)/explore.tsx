import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Text,
  AccessibilityInfo,
} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

function HomeScreen() {
  return (
    <ScrollView style={{flex: 1}}>
      <Text>Home Screen</Text>
    </ScrollView>
  );
}

function OffersScreen() {
  return (
    <ScrollView style={{flex: 1}}>
      <Text>Offers Screen</Text>
    </ScrollView>
  );
}

function NotificationsScreen() {
  return (
    <ScrollView style={{flex: 1}}>
      <Text>Notifications Screen</Text>
    </ScrollView>
  );
}

function ProfileScreen() {
  return (
    <ScrollView style={{flex: 1}}>
      <Text>Profile Screen</Text>
    </ScrollView>
  );
}

// Tab Data Array
const tabs = [
  {name: "Home", component: HomeScreen, icon: "home"},
  {name: "Offers", component: OffersScreen, icon: "pricetag"},
  {
    name: "Notifications",
    component: NotificationsScreen,
    icon: "notifications",
  },
  {name: "Profile", component: ProfileScreen, icon: "person"},
];

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: "#000",
        tabBarStyle: {
          position: "absolute",
          marginHorizontal: 40,
          borderRadius: 50,
          bottom: 20,
          backgroundColor: "transparent",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: ({focused}: any) => (
              <Ionicons
                name={tab.icon}
                color={focused ? "green" : "gray"}
                size={30}
              />
            ),
            tabBarButton: (props) => {
              const {item, onPress, accessibilityState} = props;
              const focused = accessibilityState.selected;
              return (
                <TouchableWithoutFeedback style={{}} {...props}>
                  <View
                    style={{
                      flex: 1,
                      // backgroundColor: "red",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "red",
                      padding: 8,
                      position: "absolute",
                      top: -22,
                      borderRadius: 50 / 2,
                      paddingTop: 5,
                    }}
                  >
                    <Ionicons
                      name={tab.icon}
                      color={focused ? "green" : "gray"}
                      size={30}
                    />
                  </View>
                </TouchableWithoutFeedback>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
