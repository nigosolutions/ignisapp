import { Icon, ListItem, SearchBar } from "@rneui/themed";
import {
  Box,
  Button,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

var styles = StyleSheet.create({
  title: {
    color: "black",
    fontWeight: "bold",
  },
  subtext: {
    color: "grey",
    fontWeight: "bold",
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 0,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
  listContainer: {
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
  },
  DTitle: {
    color: "black",
    fontWeight: "bold",
    // size: 20
  },
});

function WOScreen(props) {
  const [status, setStatus] = React.useState(0);
  const [selectedWo, setselectedWo] = React.useState(0);
  const [wo, setWO] = React.useState([]);
  React.useEffect(() => {
    setWO([
      {
        name: "Asset tagging",
        id: 1,
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: "XYZ street" },
      },
      {
        name: "Asset tagging",
        id: 1,
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: "XYZ street" },
      },
      {
        name: "Asset tagging",
        id: 1,
        details: "Details of Asset tagging",
        date: "10 Jan",
        building: { name: "Building 1", location: "XYZ street" },
      },
    ]);
  }, []);

  React.useEffect(() => {
    ;
  }, [selectedWo]);


  //Tab
  const FirstRoute = () => (
    <Box>
      <SearchBar
        placeholder="Enter Search Text"
        round
        containerStyle={{ backgroundColor: "white" }}
        inputContainerStyle={{ backgroundColor: "#e5e5e5" }}
        lightTheme
      />

      <ScrollView>
        <VStack space={3} padding={3}>
          {wo.map((item) => (
            <ListItem
              containerStyle={styles.listContainer}
              onPress={() => {
                setselectedWo(item);
              }}
            >
              <VStack alignItems={"center"}>
                <Icon size={40} name="pending" type="material" color="grey" />
                <Text fontSize={10}>Pending</Text>
              </VStack>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>
                  {item.name}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.subtitleView}>
                  {"WO: "}
                  {item.id}
                </ListItem.Subtitle>
              </ListItem.Content>
              <Text>{item.date}</Text>
            </ListItem>
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
      <Text>Tab2</Text>
    </View>
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Pending" },
    { key: "second", title: "Completed" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor={"gray"}
      inactiveColor={"black"}
      style={{ backgroundColor: "#fafbfc" }}
    />
  );
  //Tab End

  return (
    <Box padding={3} bgColor={"#E5E5E5"} flex={1}>
      <Box padding={2} rounded={15} bgColor={"white"} flex={1}>
        <HStack flex={1}>
          <Box
            bgColor={"white"}
            flex={1}
            borderRightWidth={1}
            borderColor={"#e5e5e5"}
          >
            <VStack flex={1}>
              <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
              />
            </VStack>
          </Box>
          <Box bgColor={"white"} flex={2}>
            <VStack space={2} padding={2} flex={1}>
              {selectedWo === 0 ? (
                <Text flex={1} alignitems={'center'} justifyContent={'cenetr'}>Not Selected!</Text>
              ) : (
                <>
                  <VStack borderBottomWidth={1} borderColor={"#e5e5e5"}>
                    <Text style={styles.title}>{selectedWo.name}</Text>
                    <Text style={styles.subtext}>{selectedWo.id}</Text>
                  </VStack>
                  <ScrollView>
                    <Text style={styles.title}>Details:</Text>
                    <Text>{selectedWo.details}</Text>
                    <Text>{selectedWo.building.name}</Text>
                  </ScrollView>
                  <Box
                    alignItems={"center"}
                    borderTopColor={"#e5e5e5"}
                    borderTopWidth={"1"}
                    padding={3}
                  >
                    <Button width={"50%"}>Continue</Button>
                  </Box>
                </>
              )}
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}

export default WOScreen;
