import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Image,
} from "native-base";
import { AppRegistry } from "react-native";
import DashboardScreen from "./app/Screens/DashboardScreen";
import WOScreen from "./app/Screens/WOScreen";
import ScheduleScreen from "./app/Screens/ScheduleScreen";
import { Avatar } from "@rneui/themed";
import AssetTaggingScreen from "./app/Screens/AssetTaggingScreen";
import AssetTaggingPhotoScreen from "./app/Screens/AssetTaggingPhotoScreen";
import AssetTaggingDetailsScreen from "./app/Screens/AssetTaggingDetailsScreen";
import AssetTaggingNav from "./app/Screens/AssetTaggingNav";
import ITMScreen from "./app/Screens/ITMScreen"

AppRegistry.registerComponent("ignisapp", () => App);
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Dashboard":
      return "apps";
    case "Work Orders":
      return "tools";
    case "Schedule":
      return "calendar";
    case "Requests":
      return "inbox";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box alignItems={"center"} px="4">
          <Image
            alt="Logo"
            size={200}
            resizeMode="contain"
            source={require("./app/assets/logo.png")}
          />
        </Box>
        <VStack divider={<Divider top={100} />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack top={100} space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              Help
            </Text>
            <VStack space="3">
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="phone" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Support
                  </Text>
                </HStack>
              </Pressable>
              <Pressable px="5" py="2">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    as={<MaterialCommunityIcons name="nut" />}
                  />
                  <Text color="gray.700" fontWeight="500">
                    Settings
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "Dashboard",
            headerRight: () => (
              <Pressable padding={5}>
                <Avatar
                  rounded
                  title="GS"
                  containerStyle={{ backgroundColor: "#3d4db7" }}
                />
              </Pressable>
            ),
          }}
        />
        <Drawer.Screen name="Work Orders" component={WOScreen} />
        <Drawer.Screen name="Schedule" component={ScheduleScreen} />
        <Drawer.Screen name="Requests" component={AssetTaggingNav} />
      </Drawer.Navigator>
    </Box>
  );
}
export default function Example() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
