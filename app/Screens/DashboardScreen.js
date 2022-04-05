import {
    NativeBaseProvider,
    Button,
    Box,
    HamburgerIcon,
    Pressable,
    Heading,
    VStack,
    Text,
    Center,
    HStack,
    Divider,
    Icon,
  } from "native-base";

function DashboardScreen(props) {
    return (
      <Center>
        <Text mt="12" fontSize="18">
          This is {props.id} page.
        </Text>
      </Center>
    );
  }

  export default DashboardScreen;