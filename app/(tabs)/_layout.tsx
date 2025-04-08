import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Text,
  AccessibilityInfo,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
// import {createBottomTabNavigator} from "@react-navigation/stạck";
import {Ionicons} from "@expo/vector-icons";

function HomeScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: (Dimensions.get("screen").height * 7) / 100,
      }}
    >
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
          backgroundColor: "transparent",
          // borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: {width: 0, height: 0},
          marginHorizontal: 40,
          borderRadius: 50,
          bottom: 20,
          borderWidth: 1,
        },
        tabBarIndicatorStyle: {backgroundColor: null},
        tabBarIndicatorContainerStyle: {
          // Offset the View containing the Indicator
          // to match your layouts margin
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
                <TouchableOpacity {...props}>
                  <View
                    style={{
                      // backgroundColor: "red",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <Ionicons
                      name={tab.icon}
                      color={focused ? "green" : "gray"}
                      size={30}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
