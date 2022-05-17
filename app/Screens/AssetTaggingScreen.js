import { FAB, ListItem } from "@rneui/themed";
import { Box, HStack, ScrollView, Text, VStack, Button, Modal, Popover} from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AssetTaggingDetailsScreen from "./AssetTaggingDetailsScreen";




function AssetTaggingScreen(props) {
  const [visible, setVisible] = React.useState(true);
  const [dev, setDev] = React.useState([
    {
      name: "Device ",
      id: "AT3223",
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
  const [showModal, setShowModal] = React.useState(false);
  // React.useEffect(() => {
  //   setDev([
  //     {
  //       name: "Device ",
  //       id: "AT3223",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //     {
  //       name: "Device ",
  //       id: "AT3224",
  //       details: "Details of Asset tagging",
  //       date: "10 Jan",
  //       building: {
  //         name: "Building 1",
  //         location: { address: "XYZ street", coords: [25.2854, 51.531] },
  //       },
  //       status: "pending",
  //     },
  //   ]);
  // }, []);

  const onDelete = (id)=>{
    setDev(dev.filter(dev.id !== id));
  };

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
            <FAB title="Submit" color="#377DFF" />
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
                    // <TouchableOpacity onLongPress={() => setShowModal(true)}>
                    <ListItem
                      // backgroundColor={"#e5e5e5"}
                      margin={5}
                      width={250}
                      containerStyle={styles.listContainer}
                    >
                      <VStack space={1} flex={1}>
                        <ListItem.Title style={styles.title}>
                          {item.name}
                        </ListItem.Title>
                        <ListItem.Subtitle style={styles.subtext}>
                          {item.name}
                        </ListItem.Subtitle>
                      </VStack>
                      <Box flex={1} alignItems='center'>
                        <Popover trigger={triggerProps => {
                            return <Button {...triggerProps} colorScheme="info">
                                    Edit/Delete
                                  </Button>;
                        }}>
                            <Popover.Content accessibilityLabel="Delete Customer" w="56">
                            <Popover.Arrow />
                            <Popover.CloseButton />
                            <Popover.Header>Edit/Delete</Popover.Header>
                            <Popover.Body>
                              Do you want to edit or delete {item.name + '?'}
                              This action cannot be
                              reversed. Deleted data can not be recovered.
                            </Popover.Body>
                            <Popover.Footer justifyContent="flex-end">
                              <Button.Group space={2}>
                                <Button colorScheme="coolGray" variant="ghost">
                                  Cancel
                                </Button>
                                <Button colorScheme="info">Edit</Button>
                                <Button colorScheme="danger" onPress={()=>{onDelete('AT3224')}}>Delete</Button>
                              </Button.Group>
                            </Popover.Footer>
                          </Popover.Content>
                        </Popover>
                      </Box>
                    </ListItem>
                    // </TouchableOpacity>
                  ))}
                </Box>
                {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="300px">
                    <Modal.CloseButton />
                    <Modal.Header>Edit or delete device</Modal.Header>
                    <Modal.Footer>
                      <Button.Group space={2} flex={1} justifyContent={'center'}>
                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                        setShowModal(false);
                      }}>
                          Edit
                        </Button>
                        <Button style={{backgroundColor:'red'}} onPress={() => {
                        setShowModal(false);
                      }}>
                          Delete
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal> */}
              </ScrollView>
            </Box>
          </VStack>
        </Box>
        <FAB
          placement="right"
          visible={visible}
          icon={{ name: "add", color: "#377DFF" }}
          color="white"
          onPress={()=>props.navigation.navigate('Photo')}
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
