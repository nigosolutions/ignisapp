import { FAB, ListItem } from "@rneui/themed";
import { Box, HStack, ScrollView, Text, VStack, Button } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";

function AssetTaggingScreen(props) {
  const [visible, setVisible] = React.useState(true);
  const [dev, setDev] = React.useState([]);
  React.useEffect(() => {
    setDev([
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
      {
        name: "Device ",
        id: "AT3224",
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: {
          name: "Building 1",
          location: { address: "XYZ street", coords: [25.2854, 51.531] },
        },
        status: "pending",
      },
    ]);
  }, []);
  return (
    <Box flex={1} padding={5}>
      <VStack space={5} flex={1}>
        <Box rounded={10} flex={1} bgColor={"white"}>
          <HStack padding={5} flex={1}>
            <VStack flex={3} space={3}>
              <Text style={styles.desc_title}>Work Order</Text>
              <Text style={styles.subtext}>Type: Asset Tagging</Text>
              <Text style={styles.subtext}>Property: Building XYZ</Text>
            </VStack>
            <FAB title="Continue" color="#377DFF" />
          </HStack>
        </Box>
        <Box flex={3}>
          <VStack space={3}>
            <Text style={styles.desc_title}>Assets</Text>
            <Box justifyContent={"center"} alignContent={"stretch"}>
              <ScrollView>
                <Box
                  space={3}
                  flexDirection={"row"}
                  flexWrap={"wrap"}
                  justifyContent={"space-between"}
                >
                  {dev.map((item) => (
                    <ListItem
                      backgroundColor={"#e5e5e5"}
                      margin={5}
                      width={250}
                      containerStyle={styles.listContainer}
                    >
                      <VStack space={1}>
                        <ListItem.Title style={styles.title}>
                          {item.name}
                        </ListItem.Title>
                        <ListItem.Subtitle style={styles.subtext}>
                          {item.name}
                        </ListItem.Subtitle>
                      </VStack>
                    </ListItem>
                  ))}
                </Box>
              </ScrollView>
            </Box>
          </VStack>
        </Box>
        <FAB
          placement="right"
          visible={visible}
          icon={{ name: "add", color: "#377DFF" }}
          color="white"
        />
      </VStack>
    </Box>
  );
}

var styles = StyleSheet.create({
  title: {
    color: "black",
    fontWeight: "bold",
  },
  desc_title: {
    color: "#4e5d78",
    fontWeight: "bold",
    fontSize: 20,
  },
  subtext: {
    color: "#99879D",
    fontWeight: "normal",
  },
  listContainer: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonTextStyle: {
    color: "#007fff",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AssetTaggingScreen;
